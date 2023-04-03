import express from "express";
import mongoose from "mongoose";
import Folders from "../models/folders.js";

import Folder from "../models/folders.js";

const router = express.Router();

export const createFolder = async (req, res) => {
  const { folderName } = req.body;
  const newFolder = new Folder({ folderName });

  try {
    await newFolder.save();

    res.status(201).json(newFolder);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

export const getFolders = async (req, res) => {
  try {
    const folders = await Folder.find();

    res.status(200).json(folders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateFolder = async (req, res) => {
  const { id: _id } = req.params;
  const folder = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No folder with that id");

  const updatedFolder = await Folders.findByIdAndUpdate(
    _id,
    {
      folderName: folder.folderName,
    },
    { new: true }
  );
  res.json(updatedFolder);
};

export const deleteFolder = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  await Folder.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully." });
};

export default router;
