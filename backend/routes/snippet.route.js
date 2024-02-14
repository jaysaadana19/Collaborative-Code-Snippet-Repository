import express from 'express';
import { createSnippet } from '../controllers/snippet.controller.js';

const router = express.Router();

router.post('/snippet/create', createSnippet);

export default router