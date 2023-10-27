import {Response} from "npm:@types/express";
import { CharacterModel, CharacterModelType } from "../db/character.ts";

export const getAll = async ( res : Response) => {
    const characters : CharacterModelType[] = await CharacterModel.find();
    if(characters === null){
        res.status(500).send("Error");
        return;
    }
    else{
        res.status(200).send(characters);
    }
  
}