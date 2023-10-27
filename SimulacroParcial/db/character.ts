import mongoose from "npm:mongoose@7.6.3";

enum Race {
    Hobbit = "Hobbit",
    Human = "Human",
    Elf = "Elf",
    Dwarf = "Dwarf",
    Ent = "Ent"
}

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name : { type: String, required : true},
    race: {type : String, required : true},
    description: {type : String, required : true},
    skills: {type : String, required : false, default : false}
});

export type CharacterModelType = {
    name : string;
    race : Race;
    description : string;
    skills : boolean;
    _id : mongoose.Types.ObjectId;
};

export const CharacterModel = mongoose.model<CharacterModelType>(
    "character",
    CharacterSchema
);
