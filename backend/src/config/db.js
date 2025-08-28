// 1. Importar las dependencias necesarias
import mongoose from "mongoose";

// 2. Crear la función de conexión
export const conectMongo = async () => {
    try {
        await mongoose.connect(process.env.BD_URL, { dbName: "e-commerce" });
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.error("Error de conexión: ", error);
    }
}