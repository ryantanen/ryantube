import Video from "@/app/models/Video";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoMap from "@/components/videos/VideoMap";
import React from "react";

interface Video {
  title: string;
  owner_name: string;
  description: string;
  views: number;
  blob_url: string;
  likes: string[];
  dislikes: string[];
  thumbnail_url: string;
}

async function Page({ params }: { params: { id: string } }) {
  const getVideo = async () => {
    return Video.findById(params.id)
      .then((video) => video)
      .catch((err) => {
        console.log(err);
        return undefined;
      });
  };
  const video = await getVideo();
  if (video) {
    return (
      <div className="grid grid-cols-[3fr_1fr] p-6 gap-3">
        <div className="flex flex-col gap-1 ">
          <div className="">
            <video className="rounded-lg" src={video.blob_url} controls></video>
          </div>
          <div className="p-3">
            <p className="text-3xl">{video.title}</p>
            <p className="text-muted-foreground text-sm py-1 flex flex-row gap-2 items-center">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              {video.owner_name}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>

              <CardDescription>{video.views} views, 1d ago</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="max-h-40">
                <p className="text-base text-muted-foreground">
                  {video.description}
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <VideoMap />
        </div>
      </div>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video not found</CardTitle>
        <CardDescription>Sorry! You may have found a bad link.</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Page;
