const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require("./routes/user");
const proyectoRoutes = require("./routes/proyecto");
const cors = require("cors");
const socket = require("socket.io");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;
cont = uri = 'mongodb+srv://admin:admin@cluster0.dbwsjso.mongodb.net/sistDistribuidos'

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', proyectoRoutes);

//routers rutas
app.get("/", (req, res)=>{
  res.send("Bienvenidos a la API");
});

//mongodb conection
mongoose
// .connect(process.env.MONGODB_URI)
.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Conectado a mongodb atlas"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log('servidor esta funcionando', port));