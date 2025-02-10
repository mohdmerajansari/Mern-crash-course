import express from "express" ;
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js"
import cors from "cors"
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());



app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/products",productRouter)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")))
  app.get("*",(req, res, next) => {
    res.sendFile(path.resolve(__dirname,"frontend","dist", "index.html"));
  })
}

app.listen(PORT, () => {
  connectDB();;
  console.log(`The server is running on http://localhost:${PORT}`)
})

//aICr7jdnW9oC1j5K