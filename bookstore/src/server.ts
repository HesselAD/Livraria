import express from "express";
import authRoutes from "./routes/authRoute";
import bookRoutes from "./routes/bookRoute";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(authRoutes);
app.use(bookRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
