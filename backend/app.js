// Archivo de ejecución de la aplicación
// configurar nuestro servidor y gestionar la lógica de programación

// 1. Importar las dependencias y modulos necesarias
import express from "express";
import dotenv from "dotenv";
import { conectMongo } from "./src/config/db.js";

// 2. Configurar las dependecnias que necesitamos
const app = express();
dotenv.config();

const port = process.env.PORT;
conectMongo(); //Conexión con DB

// 3. Funcionalidades que necesite agregar
app.get("/", (req, res) => {
  res.send("Server works")
});

// 4. Levantar el servidor (3000, 6000 (no recomendado), 9000)
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});