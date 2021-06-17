const { Router } = require('express');
const raffle = require('./Raffle');

const routes = Router();

routes.use(raffle);

module.exports = routes;