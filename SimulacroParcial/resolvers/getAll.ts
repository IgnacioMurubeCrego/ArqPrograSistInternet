import {Response} from "npm:@types/express";
import { CharacterModel, CharacterModelType } from "../db/character.ts";

export const getAll = async (res : Response) => {
    try{
    const characters : CharacterModelType[] = await CharacterModel.find();
    res.send(characters);
    }catch(e){
        console.log(e);
    }
    
}