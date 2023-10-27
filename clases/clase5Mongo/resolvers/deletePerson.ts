import {Request, Response} from "npm:@types/express";
import {PersonModel} from "../db/person.ts";

export const deletePerson = async ( req : Request, res : Response) => {
    const dni = req.params.dni;
    const deleted = await PersonModel.deleteOne().where("dni").equals(dni).exec();

    if(deleted.deletedCount === 0) {
        res.status(404).send("DNI " + dni + " not found");
        return;
    }

    res.status(200).send("DNI " + dni + " deleted.");
}