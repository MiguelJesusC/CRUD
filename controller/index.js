const DB = require('../models/index.js')

const test = (req, res) => {
    res.status('200').send({
        message: 'Hey again dude ;) , you are in the controller!'
    })
}

const saveDocument = (req, res) => {

    let document = new DB()

    let params = req.body
    console.log(params)

    document.titulo = params.titulo,
    document.claves = params.claves,
    document.descripcion = params.descripcion,
    document.fuente = params.fuente,
    document.tipodelRecurso = params.tipodelRecurso,
    document.cobertura = params.cobertura

    document.save((err, dbStored) =>{
            if(err){
                res.status(500).send({message: 'Error to save on DB'});    
            }else{
               if(!dbStored){
                   res.status(400).send({message: `Can't save document`})
               }else{
                res.status(200).send({document:dbStored});
               }
            }
        })
    }  

    



module.exports = {
    test,
    saveDocument
}