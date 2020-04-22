//dentro del fs va el nombre del paquete q se va a utilizar
//path del modulo
//fs : file system

const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log(`Hay que listar la tabla del ${base}`);
        listarTabla(base, limite).then(mensaje => console.log(mensaje))
            .catch(err => console.log(err.mensaje))
        break;
    case 'crear':
        console.log("Hay que crear:");
        crearArchivo(base).then(mensaje => console.log(mensaje))
            .catch(err => console.log(err.mensaje));
        break;
    default:
        console.log("comando no valido");
}