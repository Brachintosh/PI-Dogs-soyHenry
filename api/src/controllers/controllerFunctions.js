const axios = require('axios');
const { Raza, Temperamento } = require('../db');
const { API_KEY } = process.env;



const getApiBreedsInfo = async () => {

        // const baseDeDatos = await Raza.findAll();  // >> encuentra lo que tenga en DB
        const getAPI = await axios.get("https://api.thedogapi.com/v1/breeds", {
            headers: {'x-api-key': `${API_KEY}`}});
        
        const filteredInfo = await getAPI.data.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                image: dog.image.url,
                origin: dog.origin,
                minHeight: Number(dog.height.metric.split("-")[0] || 0),
                maxHeight: Number(dog.height.metric.split("-")[1] || 0),
                minWeight: Number(dog.weight.metric.split("-")[0] || 0),
                maxWeight: Number(dog.weight.metric.split("-")[1] || 0),
                lifeSpan: dog.life_span,
                breed_group: dog.breed_group,
                temperament: dog.temperament?.includes(",")
                    ? dog.temperament?.split(",").map((temp) => temp.trim())
                    : dog.temperament?.split(),
                created: false,
            }
        });
        // console.log("IMPRIME: ", breedInfo)
        return filteredInfo;
}

const getDB_Breeds = async() => {
    return await Raza.findAll({
        include: {
            model: Temperamento,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};

const getRazas = async () => {
    const razas_API = await getApiBreedsInfo();
    const razas_DB = await getDB_Breeds();

    const mapeo_RazasDB = razas_DB.map((raza) => {
        return {
            id: raza.id,
            name: raza.name,
            image: raza.image,
            origin: raza.origin,
            minHeight: raza.minHeight,
            maxHeight: raza.maxHeight,
            minWeight: raza.minWeight,
            maxWeight: raza.maxWeight,
            lifeSpan: raza.lifeSpan,
            breed_group: raza.breed_group,
            created: true,
            temperament: raza.temperament?.map((temp) => temp.name),
        }
    });

    const razas_Total = razas_API.concat(mapeo_RazasDB);
    return razas_Total;

};

const getAllTemperaments = async () => {
    const allBreeds = await getRazas();
    allBreeds.forEach((br) => {
        if(br.temperament) {
            for(let i = 0; i < br.temperament.length; i++) {
                Temperamento.findOrCreate({
                  where: { name: br.temperament[i].trim() },
                });
            }
        }        
    });
    return await Temperamento.findAll();
}


module.exports = {
    getRazas,
    getAllTemperaments,
}