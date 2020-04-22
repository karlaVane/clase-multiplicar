const fs = require("fs");

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        // validar q la base sea un numero
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es válido!`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i} = ${base *i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`El archivo de la tabla del ${base} ha sido guardado`);
        });
    });
}

/*
let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor de la base ${base} no es válido!`);

    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base *i} \n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(err);
        }
    });
    return `El archivo de la tabla del ${base} ha sido guardado`;
}
*/
//listar tabla

let listarTabla = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor de la base ${base} no es válido!`);
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base *i} \n`;

    }
    return data;

}
module.exports = {
    crearArchivo,
    listarTabla
}