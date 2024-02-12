import express from 'express';
import { createSnippet, test } from '../controllers/snippet.controller.js';

const router = express.Router();

router.get('/snippet', createSnippet);
// router.post('/update/:id', verifyUser, updateUser);
// router.delete('/delete/:id', verifyUser, deleteUser);
// router.get('/listings/:id',verifyUser, getListing);
// router.get('/:id',verifyUser, getUser);

export default router