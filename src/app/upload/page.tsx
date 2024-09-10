"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: "",
    thumbnail_url: "",
  });

  const handleVideoInfoChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setVideoInfo((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-4/5">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Upload a Video</CardTitle>
          <CardDescription>mp4 file type</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (event) => {
              event.preventDefault();

              if (!inputFileRef.current?.files) {
                throw new Error("No file selected");
              }

              const file = inputFileRef.current.files[0];

              const newBlob = await upload(file.name, file, {
                access: "public",
                handleUploadUrl: "/api/upload",
                clientPayload: JSON.stringify({
                  title: videoInfo.title,
                  owner_name: "Ryan Tanenholz",
                  description: videoInfo.description,
                  thumbnail_url: "https://placehold.co/1920x1080",
                }),
              });

              setBlob(newBlob);
            }}
          >
            <input
              name="file"
              onChange={() => setFileSelected(true)}
              ref={inputFileRef}
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              )}
              type="file"
              required
            />
            {fileSelected && (
              <div className="flex flex-col gap-3 my-3">
                <p className="text-muted-foreground">Video Details</p>
                <Input
                  id="title"
                  onChange={handleVideoInfoChange}
                  placeholder="Video Title"
                />

                <Textarea
                  id="description"
                  onChange={handleVideoInfoChange}
                  placeholder="Video Description"
                  className="h-32"
                />
                <p className="text-muted-foreground">
                  1920x1080 Thumbnail (png, jpeg, jpg)
                </p>
                {/* <Input
                  name="file"
                  onChange={() => setFileSelected(true)}
                  ref={inputFileRef}
                  type="file"
                  required
                /> */}
                <Button
                  type="submit"
                  disabled={
                    videoInfo.description == "" || videoInfo.title == ""
                  }
                >
                  Upload
                </Button>
              </div>
            )}
          </form>
          {blob && (
            <div>
              Blob url: <a href={blob.url}>{blob.url}</a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
