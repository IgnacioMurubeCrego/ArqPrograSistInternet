import mongoose from "npm:mongoose@7.6.3";

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name : { type: String, required : true},
    age: {type : Number, required : true},
    dni: {type : String, required : true},
    hasCar: {type : Boolean, required : false, default : false}
});

export type PersonModelType = {
    name : string;
    age : number;
    dni : string;
    _id : mongoose.Types.ObjectId;
    hasCar : boolean;
};

export const PersonModel = mongoose.model<PersonModelType>(
    "person",
    PersonSchema
);
