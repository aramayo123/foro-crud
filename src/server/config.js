const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');
module.exports = app =>{
    app.set('port', process.env.PORT || 3000);
    // Settings
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),        
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set("view engine", ".hbs");

    // middlewares
    app.use(morgan("dev"));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // routes
    routes(app);

    return app;
};