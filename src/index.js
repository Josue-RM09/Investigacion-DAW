const express = require('express');
const app = express();
const morgan = require('morgan');

//arreglos
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middleswares
//soporta los datos que recibiremos
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/rutas'));
app.use('/api/books',require('./routes/books'));
app.use('/api/users', require('./routes/users'));

//Inicindo servidor

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('Port')}`);
})