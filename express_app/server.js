import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import products from "./routes/product.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use("/", products);

app.listen(8000, () => console.log(`Server is running on 8000`));
