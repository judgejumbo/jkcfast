import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  // id is given by the database by default so we do not need schema for that
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
