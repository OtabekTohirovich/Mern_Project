import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from 'path'
import productRouter from "./routers/ProductRouter";
import seedRouter from "./routers/SeedRouter";
import { userRouter } from "./routers/UserRouter";
import { orderRouter } from "./routers/OrderRouter";
import { keyRouter } from "./routers/KeyRouter";


dotenv.config()

const MONGODB_URI =
  process.env.MONGODB_URL || 'mongodb+srv://tsamazonauser:mypassword@cluster0.bsg7fx9.mongodb.net/tsamazona?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

const app = express()
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/seed', seedRouter)
app.use('/api/keys', keyRouter)

app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})