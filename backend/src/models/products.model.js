// 1. Importar dependencias
import mongoose from "mongoose";

// 2. Construir la plantilla del modelo
const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    material: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        enum: ["disney", "pokemon", "osos", "animales"]
    },
    isAvailable: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const productModel = mongoose.model("products", productSchema);