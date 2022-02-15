const tareas = require('./tareas.json');
const fs = require('fs');
const {
    validarNotNull,
    validarEstadoTarea,
    guardarJson
} = require('./validacion')



module.exports = {
    guardarJson: (...objetos) => {
        fs.writeFileSync('./tareas.json', JSON.stringify(...objetos, null, 3));
    },

    listar: () => {
        tareas.forEach((tarea, index) => console.log(`${index+1}- Titutlo: ${tarea.titulo}, estado: ${tarea.estado}`))
    },
    agregar: function (nombre, estado) {
        function Tarea(name, est) {
            this.titulo = name;
            if (validarEstadoTarea(est)) {
                this.estado = est;
            } else {
                console.log('Estado invalido, se coloco estado por defecto pendiente.');
                this.estado = 'pendiente';
            }
        };
        let tarea1 = new Tarea(nombre, estado);
        console.log(tarea1);
        tareas.push(tarea1);
        guardarJson(tareas);
    },
    formatear: () => {
        guardarJson([]);
    },
    modificar: (nombre, modificacion) => {
        console.log(nombre);
        let flag = false;
        if (validarNotNull(nombre, 'Debes ingresar tarea a modificar')) {
            tareas.forEach((tarea) => {
                if (tarea.titulo === nombre) {
                    tarea.estado = modificacion;
                    console.log('Tarea modificada');
                    flag = true;
                }
            });
            if (!flag) {
                console.log('La tarea no se encuentra en el listado');
            }
        }

        guardarJson(tareas);
    },
    estado: (tar) => {
        let flag2 = false;
        if (validarNotNull(tar, 'Debes ingresar tarea a consultar')) {

            tareas.forEach((tarea, index) => {
                if (tarea.titulo == tar) {
                    console.log(`${index}- El estado de tu tarea es: ${tarea.estado}`);
                    flag2 = true
                }

            });
            if (!flag2) {
                console.log('La tarea no se encuentra en el listado');
            }
        }
    },
    renombrar: (tar, name) => {
        let resultado = 'La tarea no se encuentra en el listado';
        let flag3 = false;
        if (validarNotNull(tar, 'Debes ingresar tarea a renombrar')) {
            tareas.forEach((tarea) => {
                if (tarea.titulo === tar) {
                    tarea.titulo = name;
                    resultado = 'Tarea renombrada'
                    flag3 = true;
                }
            })
        }

        guardarJson(tareas);
        console.log(resultado);

    },
    filtrar : (estado)=>{
        let filtrada = tareas.filter((tarea)=> tarea.estado==(estado)); 
        console.log(filtrada);

    }
}