//objeto
let opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea un archivo la tabla de multiplicar', opc)
    .help().argv;

module.exports = {
    argv
}