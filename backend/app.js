// Archivo de ejecución de la aplicación
// configurar nuestro servidor y gestionar la lógica de programación

// 1. Importar las dependencias y modulos necesarias
import express from "express";
import dotenv from "dotenv";
import { conectMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// 2. Configurar las dependecnias que necesitamos
const app = express();
dotenv.config();

const port = process.env.PORT;
conectMongo(); //Conexión con DB
const _filename = fileURLToPath(import.meta.url); //_filename = la ruta del archivo al cual se hace referencia (archivo)
const _dirname = path.dirname(_filename); //_dirname = cual es la organización o estructuración de mi proyecto (directorio)

// 3. Funcionalidades que necesite agregar
app.get("/", (req, res) => {
  res.send("Server works")
});

app.use(cors()); //Habilita CORS
app.use(express.json()); //para usar formato json en peticiones y respuestas
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/uploads", express.static(path.join(_dirname, "src/uploads")));

// 4. Levantar el servidor (3000, 6000 (no recomendado), 9000)
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});