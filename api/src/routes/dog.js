const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();

// Importamos las funciones que están en el controller:
router.post('/', async(req, res, next)=>{
try {
        let {
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

        const created_Dog = await Dog.create({
            name,
            origin,
            image,
            minHeight,
            maxHeight,
            minWeight,
            maxWeight,
            lifeSpan,
            breed_group,
            created
        });

        const created_DB = await Temperament.findAll({
            where: {
                name: temperament,
            }
        });

        created_Dog.addTemperament(created_DB);

        // console.log("SOY CREATED DOG >>> ", created_Dog);
        // console.log("SOY CREATED DB >>> ", created_DB);
        res.status(200).send(created_Dog);

    } catch (error) {
        next(error);
    }
});

module.exports = router;