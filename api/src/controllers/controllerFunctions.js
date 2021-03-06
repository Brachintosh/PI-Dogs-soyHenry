const { Dog, Temperament, dog_temp } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

// Llamado y filtrado a la API:
const getApiBreedsInfo = async () => {
    
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
            temperament: dog.temperament?.map(temp => temp)
        };
    });
    // console.log("IMPRIME: ", filteredInfo)
    return filteredInfo;
}

// Llamado a DB:
const getDB_Breeds = async() => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes:['name'],
            through: {
                attributes:[]
            }
        }
    });
 };

 // Junto API + DB:
const getRazas = async () => {
    const razas_API = await getApiBreedsInfo();
    const razas_DB = await getDB_Breeds();

    const allBreeds = razas_API.concat(razas_DB);
    return allBreeds;
};

module.exports = {
    getApiBreedsInfo,
    getDB_Breeds,
    getRazas
};