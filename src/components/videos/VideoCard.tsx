"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface Video {
  title: string;
  owner_name: string;
  thumbnail_url: string;
  views: number;
  _id: string;
}

function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href={`/video/${video._id}`}
      className="flex flex-col gap-1 hover:shadow rounded-lg p-2 hover:bg-slate-50"
    >
      <Image
        src={video.thumbnail_url}
        alt="Thumbnail"
        width={1920}
        height={1080}
        className="w-full h-max-[300px] object-cover rounded-lg"
      />
      <div className="flex flex-row gap-2 m-1">
        <div className=" flex items-center ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-0">
          <div>
            <h1 className="font-bold text-foreground">{video.title}</h1>
          </div>
          <p className="text-muted-foreground text-xs">{video.owner_name}</p>

          <p className="text-muted-foreground text-xs">
            {video.views} view, 1d ago
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
