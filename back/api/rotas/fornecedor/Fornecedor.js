const TabelaFornecedor = require('./TabelaFornecedor')

class Fornecedor{
    constructor({ID,NAME,EMAIL,ITEM, dataCriacao, dataAtualizacao}){
        this.id = ID
        this.NAME = NAME
        this.EMAIL = EMAIL
        this.ITEM = ITEM
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
    }

    async criar(){
        this.validar()
        const resultados = await TabelaFornecedor.inserir({
            NAME: this.NAME,
            EMAIL: this.EMAIL,
            ITEM: this.ITEM
        })
        this.id = resultados.id
        this.dataCriacao = resultados.dataCriacao
        this.dataAtualizacao = resultados.dataAtualizacao
    }
    validar(){
        const campos = ['NAME','EMAIL','ITEM']
        campos.forEach(campo=>{
            const valor = this[campo]
            if(valor.length === 0){
                throw new Error(`O campo: ${campo}, esta vazio`)
            }
        })
    }
}

module.exports = Fornecedor