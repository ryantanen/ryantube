import Video from "@/app/models/Video";
import dbConnect from "@/lib/dbconnect";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.
        console.log("onBeforeGenerateToken", pathname, clientPayload);
        return {
          allowedContentTypes: ["video/mp4"],
          tokenPayload: clientPayload,
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log("blob upload completed", blob, tokenPayload);

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);

          // await db.update({ avatar: blob.url, userId });
          const { title, owner_name, description, thumbnail_url } = JSON.parse(
            tokenPayload?.toString() || "{}"
          );
          await dbConnect();
          console.log(title, owner_name, description, thumbnail_url);
          Video.create({
            title: title,
            owner_name: owner_name,
            description: description,
            views: 0,
            blob_url: blob.url,
            likes: [],
            dislikes: [],
            thumbnail_url: thumbnail_url,
          });
        } catch (error) {
          throw new Error("Could not update user");
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 } // The webhook will retry 5 times waiting for a 200
    );
  }
}
