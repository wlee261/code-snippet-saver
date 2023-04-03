import express from "express";
import mongoose from "mongoose";
import Snippets from "../models/snippets.js";

import Snippet from "../models/snippets.js";

const router = express.Router();

export const createSnippet = async (req, res) => {
  const { language, description, code, tags, folder } = req.body;

  const newSnippet = new Snippet({ language, description, code, tags, folder });

  try {
    await newSnippet.save();

    res.status(201).json(newSnippet);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

export const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find();

    res.status(200).json(snippets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateSnippet = async (req, res) => {
  const { id: _id } = req.params;
  const snippet = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedSnippet = await Snippets.findByIdAndUpdate(
    _id,
    {
      tags: snippet.tags,
      code: snippet.code,
      description: snippet.description,
      folder: snippet.folder,
      language: snippet.language,
    },
    { new: true }
  );
  res.json(updatedSnippet);
};

export const deleteSnippet = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  await Snippet.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully." });
};

export const deleteFolderFromSnippets = async (req, res) => {
  const { folderName } = req.params;

  await Snippets.updateMany(
    { folder: folderName },
    { $set: { folder: "None" } }
  );
  const snippets = await Snippet.find();
  res.status(200).json(snippets);
};

export default router;
