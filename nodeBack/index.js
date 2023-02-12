const express = require('express');
const cors = require('cors');
const db  = require('./src/utils/db');

db.connectDB();


const indexRoutes = require('./src/api/index/index.routes');
const hotelRoutes = require('./src/api/hotels/hotels.routes');


const PORT = 8000;
const server = express();
server.use(cors());

server.use(express.json());

server.use(express.urlencoded({ extended: true}));

server.use('/hotels', hotelRoutes);
server.use('/', indexRoutes);

server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'unexpected Error';
    return res.status(status).json(message);
});

server.listen(PORT, () =>{
    console.log(`[Server] funcionando en http://localhost:${PORT}`);
});
