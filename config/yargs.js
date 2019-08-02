const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', opts)
.command('actualizar', 'Actualiza el estado completado de una tarea', opts)
.command('borrar', 'Elemento eliminado', opts)
.command('listar', 'Elementos completados', {
    completado: {
        alias: 'c'
    }
})
.help()
.argv;

module.exports = {
    argv
}