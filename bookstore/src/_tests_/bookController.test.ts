// src/__tests__/bookController.test.ts

import request from 'supertest';
import express from 'express';
import bookRoutes from '../routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

describe('Book Controller', () => {
  test('GET /api/books - Deve retornar status 200 e uma lista de livros', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/books - Deve adicionar um novo livro e retornar status 201', async () => {
    const newBook = { title: 'New Book', author: 'Author', price: 29.99 };
    const response = await request(app).post('/api/books').send(newBook);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newBook.title);
  });

  test('POST /api/books - Deve retornar erro 400 para um título inválido', async () => {
    const invalidBook = { title: 'AB', author: 'Author', price: 19.99 };
    const response = await request(app).post('/api/books').send(invalidBook);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid book title');
  });
});
