const express = require('express');
const friendsRoutes = express.Router();


friendsRoutes.get('/',(req,res)=>{
    res.sendres.json({
        name: 'ali',
        age: 13,
        job: 'Arhitektur'
    });
});

module.express = friendsRoutes;