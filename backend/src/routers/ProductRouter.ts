import express from "express";
import { ProductModel } from "../models/ProdoctModel";
import asyncHandler from "express-async-handler";
const productRouter = express.Router();
// api products
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
  })
);

// api/slug/product
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ massage: "Product Not Found" });
    }
  })
);

export default productRouter

// app.get("/api/products", (req: Request, res: Response) => {
//     res.json(simpleProducts);
//   });

//   app.get("/api/products/:slug", (req: Request, res: Response) => {
//     res.json(simpleProducts.find((x) => x.slug === req.params.slug));
//   });
