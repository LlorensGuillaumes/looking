const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://root:angularProject@cluster0.ue2bbrg.mongodb.net/?retryWrites=true&w=majority"
console.log(DB_URL)

const connectDB = async() => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[Server] Conectado con éxito a: ${name} en host ${host} en puerto ${port}`);
    }
    catch(error) {
        console.log('[Server ERROR] conectando a la base de datos', error);
    }
};

module.exports = {
    connectDB
}