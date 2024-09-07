"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function VideoCard() {
  return (
    <Link
      href={""}
      className="flex flex-col gap-1 hover:shadow rounded-lg p-2 hover:bg-slate-50"
    >
      <img
        src="https://placehold.co/1920x1080"
        alt="Thumbnail"
        width={1920}
        height={1080}
        className="w-full h-max-[300px] object-cover rounded-lg"
      />
      <div className="flex flex-row gap-2 m-1">
        <div className=" flex items-center ">
          <Avatar className="w-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-0">
          <div>
            <h1 className="font-bold text-foreground">Title</h1>
          </div>
          <p className="text-muted-foreground text-xs">Ryan Tanenholz</p>

          <p className="text-muted-foreground text-xs">1 view, 1d ago</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
