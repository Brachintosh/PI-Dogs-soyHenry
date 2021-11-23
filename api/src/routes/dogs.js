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
            
        }

    } catch (error) {
        next(error)
    }
});

module.exports = router;