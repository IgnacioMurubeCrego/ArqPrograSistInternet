import { Request,Response } from "npm:@types/express";
import express from "npm:express@4.18.2";

const app = express();

app.get("/",(_req:Request,res:Response) : void => {
    res.status(200).send("Server Working");
})

app.listen(3000);
console.log('Server running on http://localhost:3000');