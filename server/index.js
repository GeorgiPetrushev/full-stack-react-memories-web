import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

const CONNECTIO_URL = "mongodb+srv://figoto660:<password>@cluster0.y8hc2ck.mongodb.net/?retryWrites=true&w=majority";