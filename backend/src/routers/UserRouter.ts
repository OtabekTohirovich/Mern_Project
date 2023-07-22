import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { User, UserModal } from "../models/UserModel";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";


export const userRouter = express.Router();

userRouter.post(
  '/signin',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModal.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).json({ massage: "Invalid email or password" });
  })
);

userRouter.post(
  '/signup',
  asyncHandler(async (req: Request, res: Response)=>{
    const user = await UserModal.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),

    } as User)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user)
    })
  })
)
