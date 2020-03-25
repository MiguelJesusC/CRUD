const moongose = require('mongoose')
const Schema = moongose.Schema

let DBSchema = Schema({
    titulo: String,
    claves: String,
    descripcion: String,
    fuente : String,
    tipodelRecurso: String,
    cobertura: String   
})

module.exports = moongose.model('DB', DBSchema)