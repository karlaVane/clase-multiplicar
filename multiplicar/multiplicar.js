//fs : file system acceso de archivos a nivel del servidor
const fs = require("fs"); //requiere el paquete file system
const colors = require('colors'); //requiere paquete de colores en consola

let crearArchivo = (base, limite = 10) => { //recibe como parámetro un número base 
    //Se puede definir el límite 10 por default.
    return new Promise((resolve, reject) => {
        // validar q la base sea un numero
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es válido!`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base *i} \n`; //Se crea una data con las tablas de multiplicar
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => { // crear un archivo, colocando el path
            if (err)
                reject(err); //regresa el error
            else
                resolve(`El archivo de la tabla del ${base} ha sido guardado`);
        });
    });
}

//listar tabla con async

let listarTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor de la base ${base} no es válido!`);
    }
    let data = '';
    console.log("----------------------------------".green);
    console.log(`TABLA DE MULTIPLICAR ${base}`.green);
    console.log("----------------------------------".green);
    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base *i} \n`;
    }
    return data;
}

// se debe exportar  las funciones creadas dentro del módulo
module.exports = {
    crearArchivo,
    listarTabla
}