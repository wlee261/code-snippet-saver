import mongoose from "mongoose";

const folderSchema = new mongoose.Schema({
  folderName: {
    type: String,
    required: [true, "Please enter the name of your new folder"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var Folders = mongoose.model("Folders", folderSchema);

export default Folders;
