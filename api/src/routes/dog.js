const { Router } = require("express");
const { Raza, Temperamento} = require("../db");
const router = Router();
// Importamos las funciones que están en el controller:

router.post('/', async(req, res, next)=>{
try {
    let{
        
        name,
        origin,
        image,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        lifeSpan,
        breed_group,
        temperament,
        created

    } = req.body;
    
    let createdBreed = await Raza.create({
        name,
        origin,
        image,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        lifeSpan,
        breed_group,
        // temperament,
        created,
    });

        let tempDB = await Temperamento.findAll({
        where:{name: temperament},
        // include: [Raza]
        });
    // const tempDB = await Temperamento.findAll({
    //     where:{name: temperament},
    //     include: [Raza]
    // });

    createdBreed.addTemperamento(tempDB);

    console.log(createdBreed);
    res.send(createdBreed);

    // temperament?.map(async (el) => {

  
        // const tempDB = await Temperamento.findAll({
        //     where:{name: el},
        //     include: [Raza]
        // });

        // createdBreed.addTemperamento(tempDB);
    // });
    

    } catch (error) {
        next(error);
    }
});

module.exports = router;


// router.post('/', async (req, res, next) => {
    
    // const crearPerro = req.body;
    
    // if(req.body) {
    //     try {
        
    //         const breedInfo = {
                // name: req.body.name,
                // origin: req.body.origin,
                // image: req.body.image,
                // minHeight: req.body.minHeight,
                // maxHeight: req.body.maxHeight,
                // minWeight: req.body.minWeight,
                // maxWeight: req.body.maxWeight,
                // lifeSpan: req.body.lifeSpan,
                // breed_group: req.body.breed_group,
                // temperament: [req.body.temperament],
                // created: true
    //         } 
    


            // const newBreed = await Raza.create(breedInfo);
             
            // // ! hay algo raro... no llega a la tabla intermedia ! ?
            // // Lógica para las realciones intermedias:
            // let aux = [];
            // for(let x=0; x < req.body.temperament.length; x++) {
            //     aux[x] = await Temperamento.findAll(req.body.temperament[x])

            //     if(aux[x]) {    // SI existe, lo agrego...
            //         newBreed.addTemperamento(req.body.temperament[x])
            //     } else {
            //         return
            //     }
            // }
            
//             console.log(newBreed.temperament);
//             res.status(200).send("Perro creado con éxito!");
    
//         } catch (error) {
//             next(error)
//         }

//     } else {
//         res.send('No hay datos del perro a ser creado...');
//     }

// });