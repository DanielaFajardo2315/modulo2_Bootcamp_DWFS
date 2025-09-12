import { userModel } from "../models/users.model.js";
import bcryptjs from "bcryptjs";

// 2. Definir las acciones que van a realizar - CRUD

// 2.1. Método para CREAR un usuario → POST
export const postUser = async (request, response) => {
    try {
        // la destructuración se hace cuando se necesita procesar la información del usuario antes de guardarla
        const { name, username, email, age, password, role } = request.body;
        // Método .hash encripta la contraseña
        const codedPassword = await bcryptjs.hash(password, 10);
        await userModel.create({
            name,
            username,
            email,
            age,
            password: codedPassword,
            role
        });

        return response.status(201).json({
            "message": "User created correctly"
        });

    } catch (error) {
        return response.status(400).json({
            "message": "An error occurred while creating the product.",
            "error": error.message || error
        })
    }
}

// 2.2. Método para MOSTRAR todos los usuarios → GET
export const getAllUsers = async (request, response) => {
    try {
        const allUsers = await userModel.find();
        return response.status(200).json({
            "message": "Products found",
            "data": allUsers
        });

    } catch (error) {
        return response.status(500).json({
            "message": "An error occurred while getting products.",
            "error": error.message || error
        })
    }
}

// 2.3. Método para ACTUALIZAR un usuario → PUT
export const putUserById = async (request, response) => {
    try {
        const idForUpdate = request.params.id;
        const { name, username, email, age, password, role } = request.body;

        const updateData = {
            name,
            username,
            email,
            age,
            role
        };

        if (password) {
            const codedPassword = await bcryptjs.hash(password, 10);

            updateData.password = codedPassword;
        }

        await userModel.findByIdAndUpdate(idForUpdate, updateData);

        return response.status(200).json({
            "message": "User successfully updated"
        });

    } catch (error) {
        return response.status(400).json({
            "message": "An error occurred while updating the user.",
            "error": error.message || error
        })
    }
}

// 2.4. Método para ELIMINAR un usuario → DELETE
export const deleteUserById = async (request, response) => {
    try {
        const idForDelete = request.params.id;

        await userModel.findByIdAndDelete(idForDelete);

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