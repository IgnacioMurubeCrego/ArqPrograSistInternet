// CLase 4 : APIs y Fetch data

// Paquete para hacer API rest express-npm -> para node.js y deno

import express, {Request, Response} from "npm:express@4.18.2";
import {getPlace} from "./getPlace.ts";

const miApp = express();

// 1er param. 'path' ; 2do param. funcion con parametros de pedido y respuesta
miApp.get("/",(req: Request, res: Response) => {
  res.send("Hola Mundo");
});

// .get("/saluda",(req: Request, res: Response) => {
//   res.send("<html><body><h1>Hola Mundo</h1><h2>que tal</h2></html>");})
// .get("/saluda/:nombre",(req: Request, res: Response) => {
//   const elnombre = req.params.nombre;
//   res.send('Hola ${elnombre}');
// });

// .get("/place/:zip", async (req: Request, res: Response) => {
//   try{
//   const zip = req.params.zip;
//   const place = getPlace(zip);
//   res.status(200).send(place);
//   }catch(e){
//     res.status(400).send("Zip code introduced is incorrect");
//   }
// });

miApp.listen(3000);

