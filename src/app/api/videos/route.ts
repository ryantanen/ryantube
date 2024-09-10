import Video from "@/app/models/Video";
import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request): Promise<NextResponse> {
  Video.find().then(async (res) => {
    await dbConnect();
    return NextResponse.json(res);
  });
  return NextResponse.json({ error: "Could not get videos" }, { status: 400 });
}
