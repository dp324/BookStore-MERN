import express, { request, response } from "express";
import mongoose, { mongo } from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from './routes/bookRoute.js'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())
app.use(
    cors({
        origin : ['https://book-store-mern-frontend-five.vercel.app/'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['content-type'],
    })
)

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.send("hello");
    //console.log("heh");
})

app.use('/books', bookRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log('Listening');
    })
})
.catch((err) => {
    console.log(err);
})