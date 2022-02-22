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

const variable2 = process.argv[3];
const variable3 = process.argv[4];


if (validarNotNull(process.argv[2], ' X Atencion - tienes que pasar una accion')) {
    const opcion = process.argv[2].toLowerCase();
    if (validarOpcion(opcion)) {


        switch (opcion) {

            case 'listar':
                listar();
                break;
            case 'agregar':
                agregar(variable2, variable3, process.argv.length)
                break;
            case 'formatear':
                formatear();
                break;
            case 'modificar':
                modificar(variable2, variable3);
                break;
            case 'estado':
                estado(variable2);
                break;
            case 'renombrar':
                renombrar(variable2, variable3);
                break;
            case 'filtrar':
                filtrar(variable2);
                break;

        }
    }
}