const express = require('express')
const router = express.Router()
const apiRouter = express.Router()

const movieDelivery = require('../../modules/movie/delivery')

router.use('/', apiRouter)
movieDelivery.init(apiRouter)

module.exports = router
