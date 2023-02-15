import mongoose from "mongoose";

const tmsSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  startedEpisode: {
    type: String,
    required: true,
  },
  episodeCount: {
    type: String,
    required: true,
  },
  participant: {
    type: String,
  },
  place: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Singer = mongoose.model("Singer", tmsSchema);

export default Singer;
