// 1. Importaciones necesarias
import multer from "multer";
import path from "path"; //modulo de node
import fs from "fs"; //modulo de node
import { fileURLToPath } from "url"; //modulo de node

// Desarrollo de las funcionalidades
const _filename = fileURLToPath(import.meta.url); //_filename = la ruta del archivo al cual se hace referencia (archivo)
const _dirname = path.dirname(_filename); //_dirname = cual es la organización o estructuración de mi proyecto (directorio)

// 1. Crear una carpeta donde se guarden los archivos subidos
const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

// Si no existe la carpeta UPLOADS
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER)
}

// 2. Especificar cómo vamos a guardar los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //donde vamos a guardar el archivo
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); //extensión → .jpg .pdf, etc
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_"); //nombre base
        cb(null, `${base}-${Date.now()}${ext}`); //nombre del archivo
    }
});

// 3. Qué tipo de archivos vamos a recibir
const fileFilter = (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"];
    if(allowed.includes(file.mimetype)){
        cb(null, true); //Si el archivo es permitido que lo guarde en la carpeta UPLOADS_FOLDER
    } else {
        cb(new Error("Archivo no permitido"), false); //No puede guardar el archivo
    }
}

// 4. Definir límites - tamaño de archivo
// Ej: 5MB o docs en 20MB
const limits = {
    fileSize: 5*1024*1024 //5MB
}

// 5. Exportar esas características
export const upload = multer({storage, fileFilter, limits});