const tareas = require('./tareas.json');
const fs = require('fs');
const colors = require('colors');
const {
    validarNotNull,
    validarEstadoTarea,
    guardarJson
} = require('./validacion')



module.exports = {

    listar: () => {
        tareas.forEach((tarea, index) => console.log(`${index+1}- Titutlo: ${tarea.titulo}, estado: ${tarea.estado}`.rainbow));

    },
    agregar: function (nombre, estado) {

        function Tarea(name, est) {
            this.titulo = name;
            if (validarEstadoTarea(est)) {
                this.estado = est;
            } else {
                console.log('X Estado invalido, se coloco estado por defecto pendiente.'.bgRed);
                this.estado = 'pendiente';
            }
        };
        let nombreLower = nombre.toLowerCase();
        if (validarNotNull(estado, 'X Debes Incluir un estado'.bgRed)) {
            let estadoLower = estado.toLowerCase();
            let tarea1 = new Tarea(nombreLower, estadoLower);
            console.log(tarea1);
            tareas.push(tarea1);
            guardarJson(tareas);

        }

    },
    formatear: () => {
        guardarJson([]);
    },
    modificar: (nombre, modificacion) => {


        let flag = false;
        if (validarNotNull(nombre, 'X Debes ingresar tarea a modificar'.bgRed)) {
            let nombreLower = nombre.toLowerCase();

            tareas.forEach((tarea) => {
                if (tarea.titulo === nombreLower) {
                    if (validarNotNull(modificacion, 'X El estado a ingresar se encuentra vacio'.bgRed)) {
                        tarea.estado = modificacion.toLowerCase();
                        console.log('✓ Tarea modificada'.bgGreen);
                        flag = true;
                    }
                    flag = true;
                }
            });
            if (!flag) {
                console.log('X La tarea no se encuentra en el listado'.bgRed);
            }
        }

        guardarJson(tareas);
    },
    estado: (tar) => {
        let flag2 = false;
        if (validarNotNull(tar, 'X Debes ingresar tarea a consultar'.bgRed)) {

            let tarLower = tar.toLowerCase();
            tareas.forEach((tarea, index) => {
                if (tarea.titulo == tarLower) {
                    console.log(`${index}- El estado de tu tarea es: ${tarea.estado}`.rainbow);
                    flag2 = true
                }
            });
            if (!flag2) {
                console.log('X La tarea no se encuentra en el listado'.bgRed);
            }
        }
    },
    renombrar: (tar, name) => {
        let resultado = 'X La tarea no se encuentra en el listado'.bgRed;
        let flag3 = false;
        if (validarNotNull(tar, 'Debes ingresar tarea a renombrar'.bgRed)) {
            let tarLower = tar.toLowerCase();
            tareas.forEach((tarea) => {
                if (tarea.titulo === tarLower) {
                
                    if (validarNotNull(name, 'X El nombre a ingresar esta vacio'.bgRed)) {
                        tarea.titulo = name.toLowerCase();
                        resultado = '✓ Tarea renombrada'.bgGreen
                        flag3 = true;
                    }
                    flag3=true;
                }
            })
        }

        guardarJson(tareas);
        console.log(resultado);

    },
    filtrar: (estad) => {

        if (validarNotNull(estad, 'El estado se encuentra vacio'.bgRed)) {
            let estadoLower = estad.toLowerCase();

            if (validarEstadoTarea(estad)) {
                let filtrada = tareas.filter((tarea) => tarea.estado == (estadoLower));
                filtrada.forEach((tarea, index) => console.log(`${index+1}- Titutlo: ${tarea.titulo}, estado: ${tarea.estado}`.rainbow));

            } else {
                console.log('X Estado inavalido'.bgRed);
            }
        }




    }
}