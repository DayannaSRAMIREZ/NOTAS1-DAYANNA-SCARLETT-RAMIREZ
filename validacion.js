const fs = require('fs');

module.exports = {
    // valida que la accion ingresada este dentro del rango 
    validarOpcion: (opcion) => {
        let opcionLower = opcion.toLowerCase();
        let opcionesValidas = ['listar', 'agregar','formatear','modificar','estado', 'renombrar','filtrar'];
        if (!opcionesValidas.includes(opcionLower)){
        console.log(`No entiendo qué quieres hacer, opciones validas: \n 1- ${opcionesValidas[0]}  \n 2- ${opcionesValidas[1]} \n 3- ${opcionesValidas[2]} \n 4- ${opcionesValidas[3]}\n 5- ${opcionesValidas[4]}\n 6- ${opcionesValidas[5]} `);
        }
        return opcionesValidas.includes(opcion);
    },
    //valida que no este nula la accion
    validarNotNull: (opcion, frase) => {

        if (opcion === undefined) {
            console.log(frase);
            return false;
        }
        return true;
    },
    // valida que al ingresar tarea esta tenga nombre 
    validarIngresoTarea: (largoArray) => {
        if (largoArray < 4) {
            return false;
        }
        return true;
    },
    // validacion de tareas 
    validarEstadoTarea : (estado)=>{
        let estadoLower = estado.toLowerCase();
        let estadoValidos = ['terminada', 'en progreso', 'pendiente'];
        
        return estadoValidos.includes(estadoLower); 
    },
    guardarJson: (...objetos) => {
        fs.writeFileSync('./tareas.json', JSON.stringify(...objetos, null, 3));
    }
}