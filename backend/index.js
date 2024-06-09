import express, { request, response } from "express";
import mongoose, { mongo } from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from './routes/bookRoute.js'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'https://book-store-mern-frontend-five.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hi There!');
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