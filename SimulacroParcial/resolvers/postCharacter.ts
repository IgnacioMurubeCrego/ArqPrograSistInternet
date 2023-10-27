import {Request, Response} from "npm:@types/express";
import { CharacterModel, CharacterModelType } from "../db/character.ts";

export const postCharacter =  async (req : Request, res : Response) =>{

    const body : Partial<Omit<CharacterModelType, "_id">> = req.body;
    const {name, race, description, skills} = body;
    if(!name || !name || !race || !description || !skills){
        res.status(500).send("Missing Fields in Uploaded Character Body");
        return;
    }

    const exists = await CharacterModel.findOne().where("id").equals(req.params.id).exec();

    if(exists){
        res.status(303).send("Ya existe");
        return;
    }

    const newCharacter = await CharacterModel.create({
        name,
        race, 
        description,
        skills 
    });

    res.send({
        name : newCharacter.name,
        race : newCharacter.race, 
        description : newCharacter.description,
        skills : newCharacter.skills
    });
}