//! MODULARIZAR LAS RUTAS PARA QUE QUEDEN LINDAS Y LLEVAR LAS FUNCTIONS AL CONTROLLER !!

const { Router } = require('express');
const axios = require('axios')
const { Dog, Temperament}= require('../db')
const API_KEY = process.env;
const { Op } = require("sequelize");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo= async () =>{

    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.id, 
            name:el.name,
            height:el.height.imperial,
            weight:el.weight.metric,
            life_span:el.life_span,
            image:el.image.url,
            temperament:el.temperament
        }
    }); 
   
    return apiInfo;
   
};

const getDbInfo = async()=>{
  
    return await Dog.findAll({
        include:{
            model:Temperament, 
            attributes:['name'],
            through:{
                attributes:[],
            }
        },
    });
};

const getAllDogs = async () =>{

    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    
    return infoTotal;
};

router.get('/temperaments', async (req, res, next) => {
    
    //Obtener todos los temperamentos posibles
    // En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos 
    // y luego ya{ utilizarlos desde allí}
    try{
        let array = [];
        let concatArr = [];

        const getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const infoApi = getApi.data.map( data => {
            return {
                temperament: data.temperament,
            }
        });

        
        const filtrado = infoApi.filter(data => data.temperament !== undefined)

        
        filtrado.map(data => {
            array.push(data.temperament.split(","));
            return array
        });
       
        array.forEach(data => {
            for(var i = 0; i < data.length; i++){
                data[i] = data[i].trimStart();
                concatArr.push(data[i])
            }
        });
        
        
        const tabla = {};
        const unicos = concatArr.filter((indice) => {
        return tabla.hasOwnProperty(indice) ? false : (tabla[indice] = true);
        });
        
        
        unicos.sort();

    const apiADb = unicos.map((data) => {
        return Temperament.findOrCreate({
            
            where:{
                name: data,
            }
        });
    });
    //console.log(apiADb)
        
    let showDB = await Temperament.findAll();
    res.status(200).send(showDB);

    } catch(error) {
        next(error);
    }
});

router.get('/dogs', async (req, res)=>{
    const name = req.query.name
    let dogsTotal = await getAllDogs();
    
    if(name){
        let dogsName =await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        dogsName.length ?
        res.status(200).send(dogsName):
        res.status(404).send('No se encontró la Raza');
    }else{
        res.status(200).send(dogsTotal);
    }
});

router.get("/dogs/:breedId", async (req, res) => {
    const breeds = await getAllDogs();
    const id = req.params.breedId;

    if(id) {
        let selected_Id = await breeds.filter((el) => el.id == id)
        selected_Id.length ?
            res.status(200).json(selected_Id) :
            res.status(404).send('Dog ID not found.');
        
        // let breed = breeds.filter((breed) => breed.id.toString() === breedId);
        // if (breed.length > 0) return res.status(200).send(breed);
        // res.status(404).send("No breed matches that ID");
    }
});


const createNewDog = async(req, res, next) => {

    try {
        
        let {
            name,
            image,
            height,
            weight,
            life_span,
            temperament,
            createdInDb
        } = req.body;
        console.log(name, height, weight, life_span, image, temperament ,createdInDb);

        const newDogCreated = await Dog.create({
            name,
            image,
            height,
            weight,
            life_span,
            createdInDb
        });

        let tempDB = await Temperament.findAll({
            where:{name: temperament},
            include: [Dog]
        });
        newDogCreated.addTemperament(tempDB);

        return res.json(newDogCreated);

    } catch (error) {
        next(error);
    }

};

router.post('/dogs/create', createNewDog);

//GUIA PARA RUTA:
// !NO ANDA
router.get("/order/temperaments", async (req, res, next) => { // find actividad x nombre y paises
    let { name } = req.query

    if (name) {
        try {
            let foundTemps = await Temperament.findAll({

                where: { name: name },
                include: Dog
            });

            foundTemps
                ? res.json(foundTemps)
                : res.send('Temperament not found...')
        } catch (error) {
            res.status(404)
            next(error)
        }
    } else {
        try {
            let AllTemps = await Temperament.findAll({
                include: Dog
            })
            AllTemps ?
                res.json(AllTemps)
                : res.send('No data...')
        } catch (error) {
            next(error)
        }
    }
})

module.exports = router;

