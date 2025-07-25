import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

export const app = express();

dotenv.config({
    path:"./database/config.env"
})


app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes 
