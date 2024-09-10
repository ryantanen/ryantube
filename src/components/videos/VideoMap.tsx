import Video from "@/app/models/Video";
import dbConnect from "@/lib/dbconnect";
import React from "react";
import VideoCard from "./VideoCard";

const getVideos = async () => {
  await dbConnect();
  return Video.find()
    .then((videos) => videos)
    .catch((err) => {
      console.log(err);
      return [];
    });
};

async function VideoMap() {
  // get videos from database
  const videos = await getVideos();
  return (
    <>
      {/* Map over videos and show a videocard for each one */}
      {videos.map((video) => (
        <VideoCard
          key={video._id}
          video={{
            title: video.title,
            owner_name: video.owner_name,
            thumbnail_url: video.thumbnail_url,
            views: video.views,
            _id: video._id.toString(),
          }}
        />
      ))}
    </>
  );
}

export default VideoMap;
