require('dotenv').config();
const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require('../db');
// const {Op} = require('sequelize');
const  { getApiBreedsInfo,
         getDB_Breeds,
         getRazas,} = require('../controllers/controllerFunctions');

// Rutas a usar:
router.get('/get', async (req, res, next) => {
    try {
        
        const {name} = req.query;

        if(!name){
            const info_API = await getApiBreedsInfo();
            const info_DB = await getDB_Breeds();
            const total_Info = info_API.concat(info_DB);

            res.status(200).send(total_Info.length? total_Info : "Failed to get API information" );
        }

        if(name){
            const apiInfo = await getApiBreedsInfo();
            // Busco el nombre en la API
            const queryName = await apiInfo.filter(qN => qN.name.toLowerCase().includes(name.toLowerCase()));
            // Busco el nombre en mi DB:
            const dbInfo = await Dog.findAll({
                include: {
                    model: Temperament,
                    attribute:{
                        include: ['name']
                    } ,
                    through: {
                        attribute:[]
                    }
                }
            });

            const result = queryName.concat(dbInfo);

            res.status(200).send(result.length? result : "Name not found...");
        }

    } catch (error) {
        next(error)
    }
});

router.get('/:breedId', async(req, res, next) => {
    try {
        const totalBreeds = await getRazas();   // Trae DB + API
        // Busqueda por query params >>> Id:
        const breedId = req.params.breedId

        let breed = totalBreeds.filter((br) => br.id.toString() === breedId);

        if(breed.length > 0) return res.status(200).send(breed);

        res.status(404).send("No breed matches with that ID");

    } catch (error) {
        next(error)
    }
});

module.exports = router;