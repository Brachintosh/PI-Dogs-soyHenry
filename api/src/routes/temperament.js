const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Temperament } = require("../db");
const { API_KEY } = process.env;


// Obtener todos los temperamentos de la API externa
// Guardarlos en DB.
// Usar los datos desde nuestra DB.

router.get('/' , async (req , res ,next) => {
try{
    const dogApi = await  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let temp = await dogApi.data.map( e => e.temperament)
    //separa y guarda lo que hay dentro de las posiciones del array
    temp = temp.join().split(",");
    temp = temp.filter((e) => e);
    
    //ordenar
    temp = [...new Set(temp)].sort();
    let tempTwo = temp.map((el) => el.slice(1))
    // console.log(tempTwo)
    //Guardar en la base de datos
    tempTwo.forEach((element) => {
        Temperament.findOrCreate({
            where: { name: element },
        });
    });       
    
    // Llamo a toda la base de datos
    const allTemperaments = await Temperament.findAll();
    console.log(allTemperaments);
        res.send(allTemperaments)
    
    }catch(err){
    next(err);
    }
});

module.exports = router;