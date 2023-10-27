import mongoose from "npm:mongoose@7.6.3";
import express from "npm:express@4.18.2";

import { addPerson } from "./resolvers/addPerson.ts";
import { deletePerson } from "./resolvers/deletePerson.ts";

await mongoose.connect(
"mongodb+srv://ignacio:12345@cluster0.paoyi7w.mongodb.net/testMongo?retryWrites=true&w=majority"
);

console.log("Connected with Mongo.");
const app = express();
app.use(express.json());

app.post("/addPerson", addPerson)
.delete("/deletePerson/:dni",deletePerson);

app.listen(3000);

