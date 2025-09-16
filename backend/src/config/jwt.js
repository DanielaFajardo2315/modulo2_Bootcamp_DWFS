// 1. Importar dependencias y módulos necesarios
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

// 2. Configurar la variable de entorno
dotenv.config();
const key = process.env.SECRET_KEY;

// 3. Configurar el uso de JWT

// 3.1. Generación del token → Método para generar un JWT
// payload → información del usuario
export const generateToken = (payload) => {
    return new Promise((resolve, reject)=>{
        jsonwebtoken.sign(payload,key, {expiresIn:"1h"}, (error, token) => {
            if(error){
                reject(new Error("Hubo un error al generar el JWT", error.message))
            } else {
                resolve(token);
            }
        });
    });
}

// 3.2. Método para verificar un JWT
// token → información encriptada
export const verifyToken = (token) => {
    return new Promise((resolve, reject)=>{
        jsonwebtoken.verify(token, key, (error, decoded) => {
            if(error){
                reject(new Error("Hubo un error al verificar el JWT", error.message));
            } else {
                resolve(decoded);
            }
        });
    });
}