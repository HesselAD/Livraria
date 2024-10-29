// src/routes/bookRoutes.ts

import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = Router();

// Rota para listar todos os livros
router.get('/books', getAllBooks);

// Rota para adicionar um novo livro
router.post('/books', addBook);

export default router;