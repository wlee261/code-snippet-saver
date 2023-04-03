import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema({
  language: String,
  description: {
    type: String,
  },
  code: {
    type: String,
    required: [true, "Please add a code snippet"],
  },
  tags: [String],
  folder: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var Snippets = mongoose.model("Snippets", snippetSchema);

export default Snippets;
