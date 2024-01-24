import express, { Express,Request , Response } from "express";
import cors from "cors";
const fs = require('fs');
const path = require('path');

export default (app: Express) => {
  app.use(cors());
  app.use(express.static("public"));

  app.get('/', (req:Request, res:Response) => {
    const imagePath = path.join(__dirname, '../../public' , 'Map.jpg');
  
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Transfer-Encoding', 'chunked');
  
    const stream = fs.createReadStream(imagePath);
    stream.pipe(res);
  });


};
