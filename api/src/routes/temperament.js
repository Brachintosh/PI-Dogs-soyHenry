const { Router } = require("express");
const router = Router();

// Importamos las funciones que están en el controller:
const { getAllTemperaments } = require('../controllers/controllerFunctions');

// Rutas a usar:
router.get('/get', async(req, res, next) => {
    try {
        const totalTemps = await getAllTemperaments();
        
        if(totalTemps.length < 1) {
            return res.status(404).send("There's no temperament...")
        } else {
            res.status(200).send(totalTemps)
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;