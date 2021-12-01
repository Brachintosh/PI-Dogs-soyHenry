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

router.get('/dogs/:id', async(req, res) =>{
    const id = req.params.id;
    const dogsTotal = await getAllDogs();
    if(id){
        let dogsId =await dogsTotal.filter(el => el.id === parseInt(id));
        dogsId.length ?
        res.status(200).json(dogsId):
        res.status(404).send('No se encontró esa Raza')
    }
});

// router.post('/dogs/create', async(req, res, next)=>{
//     try {
//         const {
//             name,
//             height,
//             weight,
//             life_span,
//             image,
//             createdInDb,
//             temperament
//         } = req.body;

//         let createdBreed = await Dog.create({
//             name,
//             height,
//             weight,
//             life_span,
//             image,
//             createdInDb
//         });
        
//         // let tempDB = await Temperament.findAll({
//         //     where:{name: temperament},
//         //     include: [Dog]
//         // });
        
//         // createdBreed.addTemperament(tempDB);
        
//         console.log(req.body);
        
        
//         temperament?.map(async (el) => {
//         const tempDB = await Temperament.findAll({
//             where:{name: el},
//             include: [Dog]
//         });
//         createdBreed.addTemperament(tempDB);
//         });
                
//         res.json(createdBreed);
//         } catch (error) {
//             next(error);
//         }
//     });

// no esta feo este... pero no anda...
// router.post('/dogs/create', async (req, res, next) => {
//     try{

//         let {
//             name,
//             height,
//             weight,
//             life_span,
//             image,
//             createdInDb,
//             temperament
//         } = req.body;

//         const createDog = await Dog.create({
//             name,
//             height,
//             weight,
//             life_span,
//             image,
//             createdInDb,
//         });
        
//         temperament.map(async el => {
//             const temperamentDB = await Temperament.findAll({
//                 where: {
//                     name : el
//                 },
//                 include: [Dog]
//             })
//             createDog.addTemperament(temperamentDB)
//         });

//         console.log(createDog);
//         res.status(200).send(createDog);
//     } catch (error) {
//         next(error);
//     }
// });


// let temperaments = [];
// let validTemperaments = [];

router.post("/dogs/create", async (req, res, next) => {
    try {
      const { name, height, weight, life_span, image, temperament ,createdInDb } = req.body; // traer parametros de la tabla
     
      const newDog = await Dog.create({
        //creamos un nuevo dog
        name,
        height,
        weight,
        life_span,
        image,
        createdInDb,
        temperament
       
      });
      //Me traigo los temperamentos de DB
      const tempDb = await Temperament.findAll({
        where: { //me devuelve el array de objetos con los temperamentos
          name: {
            [Op.in]: temperament
          }
        }
      });
      tempDb.map((el) => { //relacion con mi tabla intermedia
        newDog.addTemperament(tempDb);
      }) 
      res.send(newDog);
      console.log(req.body);
      //reporta algun error
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

