import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { getAll } from "./resolvers/getAll.ts";
import {getInfoById} from "./resolvers/getInfoById.ts";
import { postCharacter } from "./resolvers/postCharacter.ts";
import { updateCharacter } from "./resolvers/updateCharacter.ts";
import { deleteCharacter } from "./resolvers/deleteCharacter.ts";
const env = await load();

// const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

// if (!MONGO_URL) {
//   console.log("No mongo URL found");
//   Deno.exit(1);
// }

await mongoose.connect(
  // MONGO_URL
  "mongodb+srv://ignacio:12345@cluster0.paoyi7w.mongodb.net/Characters?retryWrites=true&w=majority"
);

const app = express();
app.use(express.json());

app
.get("/api/tierramedia/personajes", getAll)
.get("/api/tierramedia/personajes/:id", getInfoById)
.post("/api/tierramedia/personajes", postCharacter)
.put("/api/tierramedia/personajes/:id", updateCharacter)
.delete("/api/tierramedia/personajes/:id", deleteCharacter)

app.listen(3000);
console.log("Listening port 3000.");



