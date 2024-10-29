import { Pool } from "pg";
import pool from "../config/database";
import { Book } from "../models/bookModel";

export class BookRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }
  async getAllBooks(): Promise<Book[]> {
    const { rows } = await this.pool.query(
      "SELECT title, author, genre, price FROM books",
    );
    return rows;
  }
  async addBook(
    title: string,
    author: string,
    genre: string,
    price: number,
  ): Promise<Book> {
    const query =
      "INSERT INTO books(title, author, genre, price) VALUES($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.pool.query(query, [
      title,
      author,
      genre,
      price,
    ]);
    return rows[0];
  }
}
