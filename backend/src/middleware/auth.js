import { verifyToken } from "../config/jwt.js";

export const auth = (requiredRole) => {
    return async (request, response, next) => {
        // 1. Verificar si se envía un token en la cabecera de la petición
        const token = request.headers["authorization"];
        console.log("Token recibido en la cabecera de la petición: " + token);

        if(!token){
            return response.status(401).json({
                "message": "No token found, permission denied"
            });
        }
        // 2. Verificat que el token sea permitido (JWT)
        const allowedToken = token.split(" ")[1];
        console.log("Token después de separarlo del Bearer: " + allowedToken);

        try {
            const decoded = await verifyToken(allowedToken);
            console.log("Información decodificada del token: ", decoded);

            // 3. Verificar especificamente si el rol es de administrador
            if(requiredRole === "admin" && decoded.admin === false){
                return response.status(401).json({
                    "message": "Access denied, you aren't an administrator"
                });
            }
        } catch (error) {
            return response.status(401).json({
                "message": "Authentication failed, token not allowed"
            });
        }

        // Indica que debe continuar con el siguiente proceso
        next();
    }
}