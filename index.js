const express = require('express');
//
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// usamos o mongoose para criar uma conexão com a 
// connection string do banco de dados que passamos no arqvuio .env
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});
// se o usuário matar o processo
process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const userFormik = require('./src/models/userFormik');

// Load routes
const indexRoutes = require('./src/routes/index-routes');
// Chama a primeira rota '/'
app.use('/', indexRoutes);

const userFomikRoutes = require('./src/routes/userFomik-routes');
app.use('/user', userFomikRoutes);

module.exports = app;