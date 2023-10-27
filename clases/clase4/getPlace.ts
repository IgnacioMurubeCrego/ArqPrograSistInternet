type Place = {
    city : string
    country : string
}

 // Declaramos la funcion getPlace como asincrona para que siga ejecutando los demas procesos mientras espera respuestas de la API.
 // La funcion devuelve una 'Promesa' de tipo 'Place'.
export const getPlace = async (zip : string) : Promise<Place> => {
    const BASE_URL = "http://postalcode.parseapi.com/api/";
    const API_KEY = "6c24dc0b1c51689313b9e12930bc70db";
    const url = '${BASE_URL}/{API_KEY}/${zip}';
    try{
        const data = await fetch(url);
        if(data.status !== 200){
            throw new Error("Error in API fetch.");
        }
        const json = await data.json();
        return{
            city : json.city.name,
            country: json.country.name
        }
    }catch(e){
        return{
            city : "error",
            country : "error"
        }
    }
};