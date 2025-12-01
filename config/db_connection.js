const mysql = require('mysql'); //import modulo mysql
const util = require('util'); //peticiones asincronas
const config = require('./config');//importamos la configuracion de la base de datos

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});

pool.query = util.promisify(pool.query); //promisify para hacer las peticiones asincronas
module.exports = pool;