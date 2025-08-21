// Estandar → ECMAScript6 - ECMAS6 -2015
// Manejo de errores → try - catch

const cargarInformacion = async () => {


    try {
        const respuesta = await fetch('../JSON/persona.json');
        const persona = await respuesta.json();
        console.log('persona obtenida', persona);
        mostarInfo(persona);
    } catch (error) {
        console.error('Hubo un error inesperado:', error);
        alert('Hubo un error inesperado, intente más tarde');
    }
}

const cargarApi = async () => {
    try {
        const respuesta = await fetch('https://ghibliapi.vercel.app/films');
        const film = await respuesta.json();
        console.log('peliculas obtenidas', film);
    } catch (error) {
        console.error('Hubo un error inesperado:', error);
        alert('Hubo un error inesperado, intente más tarde');
    }
}

const mostarInfo = (persona) => {
    console.log('Vamos a construir un html');
    const contenedor = document.getElementById('datos');
    contenedor.innerHTML = `
    <h2 class="nombre">Nombre: ${persona.nombre}</h2>
            <p class="edad">Edad: ${persona.edad}</p>
            <div>
                <h3 class="titulo_hobbies">Hobbies</h3>
                <ul>
                    <li>${persona.hobbies[0]}</li>
                    <li>${persona.hobbies[1]}</li>
                    <li>${persona.hobbies[2]}</li>
                </ul>
            </div>
    `
}