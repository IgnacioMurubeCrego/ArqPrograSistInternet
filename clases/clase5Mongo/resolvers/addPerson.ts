import {Request, Response} from "npm:@types/express";
import {PersonModel, PersonModelType} from "../db/person.ts";

export const addPerson = async ( req:Request,res:Response) =>{
    const body : Partial<Omit<PersonModelType, "_id">> = req.body;
    const {name, age, dni, hasCar} = body;
    if(!name || !age || !dni){
        res.status(303).send("Missing Fields");
        return;
    }

    const exists = await PersonModel.findOne().where("dni").equals(dni).exec();

    if(exists){
        res.status(303).send("Ya existe");
        return;
    }

    const newPerson = await PersonModel.create({
        name,
        dni,
        age,
        hasCar
    });

    res.send({
        name: newPerson.name,
        dni : newPerson.dni,
        age : newPerson.age,
        hasCar : newPerson.hasCar,
        id : newPerson.id
    });
}
