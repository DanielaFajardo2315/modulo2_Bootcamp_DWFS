// 1. Importar dependencias y modulos necesarios
import { productModel } from "../src/models/products.model.js";

// 2. Definir las acciones que van a realizar - CRUD

// 2.1. Método para CREAR un producto → POST
export const postProduct = async (request, response) => {
    // return response.json({"mensaje": "Funciona petición POST"});
    try {
        await productModel.create(request.body);
        return response.status(201).json({
            "message": "Product created correctly"
        });

    } catch (error) {
        return response.status(400).json({
            "message": "An error occurred while creating the product.",
            "error": error.message || error
        })
    }
}

// 2.2. Método para MOSTRAR todos los productos → GET
export const getAllProducts = async (request, response) => {
    try {
        const allProducts = await productModel.find();
        return response.status(200).json({
            "message": "Products found",
            "data": allProducts
        });

    } catch (error) {
        return response.status(500).json({
            "message": "An error occurred while getting products.",
            "error": error.message || error
        })
    }
}

// 2.3. Método para ACTUALIZAR un producto → PUT
export const putProductById = async (request, response) => {
    try {
        const idForUpdate = request.params;
        const dataForUpdate = request.body;
        
        await productModel.findByIdAndUpdate(idForUpdate, dataForUpdate);

        return response.status(200).json({
            "message": "Product successfully updated"
        });

    } catch (error) {
        return response.status(400).json({
            "message": "An error occurred while updating the product.",
            "error": error.message || error
        })
    }
}

// 2.4. Método para ELIMINAR un producto → DELETE
export const deleteProductById = async (request, response) => {
    try {
        const idForDelete = request.params;
        
        await productModel.findByIdAndDelete(idForDelete);

        return response.status(200).json({
            "message": "Product successfully deleted"
        });

    } catch (error) {
        return response.status(400).json({
            "message": "An error occurred while deleting the product.",
            "error": error.message || error
        })
    }
}