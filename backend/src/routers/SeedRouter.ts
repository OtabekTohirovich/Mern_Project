import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../models/ProdoctModel";
import { sampleUsers, simpleProducts } from "../data";
import { UserModal } from "../models/UserModel";
const seedRouter = express.Router();

seedRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
    const createProducts = await ProductModel.insertMany(simpleProducts);

    await UserModal.deleteMany({});
    const createUsers = await UserModal.insertMany(sampleUsers);

    res.json({createProducts, createUsers});
  })
);

export default seedRouter