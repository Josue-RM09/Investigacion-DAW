const { Router } = require('express');
const router = Router();

router.get('/', async (req,res) => {
    res.send('usuarios');
});

module.exports = router;