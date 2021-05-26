const Modelo = require('./modeloTabela')

module.exports={
    listar(){
        return Modelo.findAll({raw: true})
    },
    inserir(dados){
        return Modelo.create(dados)
    }

}