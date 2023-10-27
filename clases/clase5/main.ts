import express, {Request,Response} from "npm:express@4.18.2";
import {getPersonaje} from "./resolvers/getPersonaje.ts";
const app = express();

app.
get("/personaje/:id", getPersonaje);

app.listen(3000);