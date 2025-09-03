// 1. Importar dependencias y modulos necesarios
import { productModel } from "../src/models/products.model.js";

// 2. Definir las acciones que van a realizar - CRUD

// 2.1. Método para CREAR un producto → POST
export const postProduct = (request, response) => {
    // Acá va la lógica de la petición
    return response.json({"mensaje": "Funciona petición POST"});
}

// 2.2. Método para MOSTRAR todos los productos → GET
export const getAllProducts = (request, response) => {
    return response.json({"mensaje": "Funciona petición GET"});
}

// 2.3. Método para ACTUALIZAR un producto → PUT
export const putProductById = (request, response) => {
    return response.json({"mensaje": "Funciona petición PUT"});
}

// 2.4. Método para ELIMINAR un producto → DELETE
export const deleteProductById = (request, response) => {
    return response.json({"mensaje": "Funciona petición DELETE"})
}