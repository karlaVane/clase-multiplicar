//modulo = paquete
//llamar al modulos creados
var colors = require('colors/safe');
const argv = require("./config/yargs").argv; // modulo propio poner el path donde está
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; //opcion que se requiera realizar listar o crear
let base = argv.base; // obtiene la base indicada en la linea de comandos
let limite = argv.limite; // obtiene el limite indicado en la linea de comandos

switch (comando) {
    case 'listar':
        console.log(`Hay que listar la tabla del ${base}`);
        // Llamar a la función listarTabla del módulo multiplicar
        listarTabla(base, limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err.mensaje)) //Capturar el error.
        break;
    case 'crear':
        console.log("Hay que crear:");
        //Llamar a la función Crear archivos del módulo multiplicar
        crearArchivo(base, limite)
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => console.log(colors.red(err))); //captura el error
        break;
    default:
        console.log("comando no valido");
}