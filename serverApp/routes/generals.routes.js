module.exports = app=>{
    const generals = require('../controllers/generals.controller')
    const router  = require('express').Router();

    router.get('/', generals.getAll);
    router.post('/', generals.create);

    app.use('/api/generals', router)
}