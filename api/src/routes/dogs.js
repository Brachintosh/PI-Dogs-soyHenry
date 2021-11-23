const { Router } = require("express");
const router = Router();
// Importamos las funciones que están en el controller:
const { getRazas } = require('../controllers/controllerFunctions');

// Rutas a usar:
router.get('/get', async (req, res, next) => {
    try {
        
        const totalBreeds = await getRazas();
        // Busqueda por query name:
        if(req.query.name) {
            let breed = await totalBreeds.filter((br) => 
            br.name.toLowerCase().includes(req.query.name.toLowerCase())
            )
            if(breed.length > 0) return res.status(200).send(breed);
            res.status(404).send("Breed not found...");
        }
        console.log(breed)
        res.status(200).send(totalBreeds);

    } catch (error) {
        next(error)
    }
});

router.get('/:breedId', async(req, res, next) => {
    try {

        const totalBreeds = await getRazas();
        // Busqueda por query params >>> Id:
        const breedId = req.params.breedId

        let breed = totalBreeds.filter((br) => br.id.toString() === breedId);

        if(breed.length > 0) return res.status(200).send(breed);

        res.status(404).send("No breed matches that ID");
    } catch (error) {
        next(error)
    }
});

module.exports = router;