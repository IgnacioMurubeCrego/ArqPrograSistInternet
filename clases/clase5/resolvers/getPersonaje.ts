import type {Request, Response} from "npm:express@4.18.2";

export const getPersonaje = async (req : Request, res: Response) : Promise<void> => {
    const id : number = req.params.id;
    const response = await fetch("https://rickandmortyapi.com/api/character/"+id);
    if(response.status !== 200){
        res.status(500).send("Not working");
    }

    const data = await response.json();

    const{name,episode} = data;
    try{
    const episodesNames : string[] = await Promise.all(episode.map(async (url : string) => {
        const response = await fetch(url);
        if(response.status!== 200) throw new Error("episodio not found");
        const episode = await response.json();
        return episode.name;
    })
    );
    
    res.send({name,episodes : episodesNames});
    }
    catch(e){
        res.status(500).send();
    }   
};

export default {getPersonaje};