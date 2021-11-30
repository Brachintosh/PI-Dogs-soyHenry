const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { API_KEY } = process.env;

// Obtener todos los temperamentos de la API externa
// Guardarlos en DB.
// Usar los datos desde nuestra DB.

// Rutas a usar:

router.get('/get', async(req, res, next) => {
    try {
    let getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    let info_API = await getApi.data.map((temp) =>{
        return {
            temperament: temp.temperament,
        }
      });
      console.log(info_API);
      res.send(info_API);

    } catch (error) {
        next(error);
    }
});


module.exports = router;
// router.get('/get', async(req, res, next) => {
//     try{
//         let arregloTemps = [];
//         let concat_Temps = [];

//         const getAPI = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//         const infoAPI = await getAPI.data.map( (temps) => {
//             return {
//                 temperament: temps.temperament,
//             }
//         });

//         const filtered = infoAPI.filter( e => e.temperament !== undefined);
//         filtered.map(data => {
//             arregloTemps.push(data.temperament.split(","));
//             return arregloTemps;
//         });

//         arregloTemps.forEach(el => {
//             for(var i=0; i < el.length; i++) {
//                 el[i] = el[i].trimStart();
//                 concat_Temps.push(el[i]);
//             };
//         });

//         const tablaDB = {};
//         const uniqueDB = concat_Temps.filter((id) => {
//             return tablaDB.hasOwnProperty(id) ? false : (tablaDB[id] = true);
//         });
        
//         uniqueDB.sort();

//         const apidAtDB = uniqueDB.map((info) => {
//             return Temperamento.findOrCreate({
//                 where: {
//                     name: info,
//                 },
//             });
//         });

//         let allDB = await Temperamento.findAll();
//         // console.log(allDB);
//         res.status(200).send(allDB);

//     } catch (error) {
//         next(error)
//     }
// });