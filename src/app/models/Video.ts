import mongoose from "mongoose";

export interface Videos extends mongoose.Document {
  title: string;
  owner_name: string;
  description: string;
  views: number; // string[]
  blob_url: string;
  likes: string[];
  dislikes: string[];
  thumbnail_url: string;
}

/* VideoSchema will correspond to a collection in your MongoDB database. */
const VideoSchema = new mongoose.Schema<Videos>({
  title: {
    /* The name of this Video */

    type: String,
    required: [true, "Please provide a title for this video."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  owner_name: {
    /* The name of the owner of this Video */

    type: String,
  },
  description: {
    /* The description of this Video */
    type: String,
    required: [true, "Please provide a description for this video."],
  },
  views: {
    /* The number of views of this Video */

    type: Number,
    default: 0,
  },
  blob_url: {
    /* The blob_url of this Video */

    type: String,
    required: [true, "Please provide a blob_url for this video."],
  },
  likes: {
    /* The likes of this Video */

    type: [String],
    default: [],
  },
  dislikes: {
    /* The dislikes of this Video */

    type: [String],
    default: [],
  },
  thumbnail_url: {
    /* The thumbnail_url of this Video */

    type: String,
    required: [true, "Please provide a thumbnail_url for this video."],
  },
});

export default mongoose.models.Video ||
  mongoose.model<Videos>("Video", VideoSchema);
