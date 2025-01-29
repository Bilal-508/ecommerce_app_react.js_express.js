import { Router } from "express";
import fetch from "node-fetch";
import { checkMiddleware } from "../middlewares/sample_middleware.js";
import { productMiddleWare } from "../middlewares/product_middleware.js";

const router = Router();

const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

router.get("/products", productMiddleWare, async (req, res) => {
  try {
    const products = await getData();
    console.log(req.status);
    const allProducts = products.map((item) => ({ ...item, ...req.status }));
    res.send(allProducts);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while fetching products" });
  }
});
router.get("/original_products", async (req, res) => {
  try {
    const products = await getData();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while fetching products" });
  }
});

router.get("/set", (req, res) => [
  res.cookie("one", "express").json({ message: "Cookie set Successfully" }),
]);

router.get("/check/:id", checkMiddleware, (req, res) => {
  if (req.user) {
    res.json({ user: req.user, message: "user fetched sucessfully" });
  } else {
    res.json({ message: "Error" });
  }
});

export default router;
