const process = require('process');
const {
    listar,
    agregar,
    formatear,
    modificar,
    estado,
    renombrar,
    filtrar
} = require('./funcionesDeTareas.js')


const {
    validarOpcion,
    validarNotNull,
} = require('./validacion')
const opcion = process.argv[2].toLowerCase();
const variable2 = process.argv[3];
const variable3 = process.argv[4];



if (validarNotNull(opcion, 'Atencion - tienes que pasar una accion') && validarOpcion(opcion)) {
    switch (opcion) {

        case 'listar':
            listar();
            break;
        case 'agregar':
            agregar(variable2.toLowerCase(), variable3.toLowerCase(), process.argv.length)
            break;
        case 'formatear':
            formatear();
            break;
        case 'modificar':
            modificar(variable2.toLowerCase(), variable3.toLowerCase());
            break;
        case 'estado':
            estado(variable2.toLowerCase());
            break;
        case 'renombrar':
            renombrar(variable2.toLowerCase(), variable3.toLowerCase());
            break;
        case 'filtrar':
            filtrar(variable2);
            break;

    }
}