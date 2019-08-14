const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';
require('dotenv').config({ path: 'path-to-.env' })
module.exports = knex(config[environment]);
