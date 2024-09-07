"use client";
import VideoCard from "@/components/videos/VideoCard";
import React from "react";

function Home() {
  return (
    // grid with responsive columns
    <div className="m-3">
      <h1 className="text-5xl font-bold p-3">Home</h1>
      <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 m-4 overflow-y-scroll h-fit">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default Home;
