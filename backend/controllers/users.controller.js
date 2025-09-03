import { userModel } from "../src/models/users.model.js";

// 2. Definir las acciones que van a realizar - CRUD

// 2.1. Método para CREAR un usuario → POST
export const postUser = (request, response) => {
    // Acá va la lógica de la petición
    return response.json({"mensaje": "Funciona petición POST"});
}

// 2.2. Método para MOSTRAR todos los usuarios → GET
export const getAllUsers = (request, response) => {
    return response.json({"mensaje": "Funciona petición GET"});
}

// 2.3. Método para ACTUALIZAR un usuario → PUT
export const putUserById = (request, response) => {
    return response.json({"mensaje": "Funciona petición PUT"});
}

// 2.4. Método para ELIMINAR un usuario → DELETE
export const deleteUserById = (request, response) => {
    return response.json({"mensaje": "Funciona petición DELETE"})
}