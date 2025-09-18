// 1. Importar dependencias
import { userModel } from "../models/users.model.js"; //validar usuario
import { generateToken } from "../config/jwt.js"; //generar el token de seguridad
import bcryptjs from "bcryptjs"; //validar contraseña

export const login = async (request, response) => {
    try {
        // VALIDACIÓN 1: Si el usuario existe en la base de datos
        const { emailLogin, passwordLogin } = request.body;

        // 1. Buscar en la base de datos
        const userFound = await userModel.findOne({
            email: emailLogin
        });
        console.log("user founded: ", userFound);

        if(!userFound){
            return response.status(404).json({
                "message": "User not found, please register"
            });
        }

        // VALIDACIÓN 2. Contraseña correcta
        const validPassword = await bcryptjs.compare(passwordLogin, userFound.password);
        if(!validPassword){
            return response.status(401).json({
                "message": "Incorrect password"
            });
        }

        // GENERACIÓN DEL TOKEN → Verificar permisos (payload)
        const payload = {
            id: userFound._id,
            user: userFound.username
        }

        if(userFound.role === "admin"){
            payload.admin = true;
        } else {
            payload.admin = false;
        }

        const token = await generateToken(payload);
        console.log("payload: ", payload);
        console.log("token: ", token);

        // Crear respuesta exitosa
        return response.status(200).json({
            "message": `Welcome: ${userFound.username}`,
            "token": token
        });

    } catch (error) {
        return response.status(401).json({
                "message": "An error occurred while logging in",
                "error": error.message || error
            });
    }
}
