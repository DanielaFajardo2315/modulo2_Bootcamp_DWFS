// Archivo de ejecución de la aplicación
// configurar nuestro servidor y gestionar la lógica de programación

// 1. Importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// 2. Configurar las dependecnias que necesitamos
const app = express();
dotenv.config();

const port = process.env.PORT;

// 3. Funcionalidades que necesite agregar
app.get("/",(req, res)=>{
  res.send("Server works")
});

// 4. Levantar el servidor (3000, 6000 (no recomendado), 9000)
app.listen(port, ()=>{
  console.log(`The server is running on http://localhost:${port}`);
});