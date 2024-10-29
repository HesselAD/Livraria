// src/server.ts

import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';

dotenv.config();
const app = express();

app.use(express.json());

// Usando as rotas de livros
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
