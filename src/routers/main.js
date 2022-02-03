// import express js & router dari express js
const express = require('express');
const mainRouter = express.Router();

// deklarasi router sub/import
const wellcomeRouter = require('./wellcome')
const userRouter = require('./users')
const vehicleRouter = require('./vehicles')
const historyRouter = require('./history')
const authRouter = require('./auth')
const adminRouter = require('./admin')

// const upload = require('../middlewares/upload');

mainRouter.use('/wellcome', wellcomeRouter) //wellcome
mainRouter.use('/auth', authRouter)
mainRouter.use('/admin', adminRouter)
mainRouter.use('/users/', userRouter) //user
mainRouter.use('/vehicles', vehicleRouter) //vehicles
mainRouter.use('/history', historyRouter) //history

// mainRouter.post("/upload", upload.single("vehicles"), (req, res) => {
//     res.status(200).json({ msg: "Success", url: req.file });
// })

// express.method(endpoint, heandler1/2, dsb)
mainRouter.get("/", (require, response) => {
    response.redirect("wellcome");
});

// export main Router
module.exports = mainRouter;