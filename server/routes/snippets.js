import express from 'express';

import { createSnippet, getSnippets, updateSnippet, deleteSnippet } from '../controllers/snippets.js';

const router = express.Router();

router.post('/', createSnippet);
router.get('/', getSnippets);
router.patch('/:id', updateSnippet);
router.delete('/:id', deleteSnippet);

export default router;