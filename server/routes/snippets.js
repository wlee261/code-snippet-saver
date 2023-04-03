import express from "express";

import {
  createSnippet,
  getSnippets,
  updateSnippet,
  deleteSnippet,
  deleteFolderFromSnippets,
} from "../controllers/snippets.js";

const router = express.Router();

router.post("/", createSnippet);
router.get("/", getSnippets);
router.patch("/updateSnippet/:id", updateSnippet);
router.patch("/deleteFolderFromSnippets/:folderName", deleteFolderFromSnippets);
router.delete("/:id", deleteSnippet);

export default router;
