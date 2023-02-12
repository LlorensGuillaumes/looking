const express = require('express');
const cors = require('cors');
const db  = require('./src/utils/db');

db.connectDB();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'DELETE', 'PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


const indexRoutes = require('./src/api/index/index.routes');
const hotelRoutes = require('./src/api/hotels/hotels.routes');
const UserRoutes = require('./src/api/users/users.routes');


const PORT = 8000;
const server = express();
server.use(cors({
    origin:"*",
    credentials: true
}));

server.use(express.json({
    limit: '5mb'
}));

server.use(express.urlencoded({ limit: '5mb', extended: true}));

server.use('/hotels', hotelRoutes);
server.use('/users', UserRoutes)
server.use('/', indexRoutes);

server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'unexpected Error';
    return res.status(status).json(message);
});

server.listen(PORT, () =>{
    console.log(`[Server] funcionando en http://localhost:${PORT}`);
});
