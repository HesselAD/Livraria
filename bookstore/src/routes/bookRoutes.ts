import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/bookController";

const router = Router();

router.post("/getAllBooks", getAllBooks);
router.post("/addBook", addBook);

export default router;