import VideoMap from "@/components/videos/VideoMap";
import React from "react";

async function Home() {
  return (
    // grid with responsive columns
    <div className="m-3">
      <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 m-4 overflow-y-scroll h-fit">
        <VideoMap />
      </div>
    </div>
  );
}

export default Home;
