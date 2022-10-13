const { Router } = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    const data = {
        "name": "Fazt",
        "website": "miweb.com"
    };
    res.json(data);
})

module.exports = router;