const { Router } = require('express');
// Importar todos los routers;
const dogsRoutes = require('./dogs');
const temperamentRoutes = require('./temperament');
const dogRoute = require('./dog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRoutes );
router.use('/temperament', temperamentRoutes);
router.use('/dog', dogRoute );

module.exports = router;
