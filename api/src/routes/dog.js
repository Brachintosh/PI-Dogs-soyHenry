const { Router } = require("express");
const { Raza, Temperamento} = require("../db");

const router = Router();
// Importamos las funciones que están en el controller:

router.post('/', async (req, res, next) => {
    try {
     
        const {
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
            created,
        } = req.body;

        let newBreed = await Raza.create({
            name: name,
            origin: origin,
            image: image,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minWeight: minWeight,
            maxWeight: maxWeight,
            lifeSpan: lifeSpan,
            breed_group: breed_group,
            temperament: temperament,
            created: created,
        });

        let tempsBreed = await Temperamento.findAll({
            where: {
                name: temperament,
            },
        });

        newBreed.addTemperamento(tempsBreed);

        res.status(200).send(newBreed);
    } catch (error) {
        next(error)
    }
});

module.exports = router;