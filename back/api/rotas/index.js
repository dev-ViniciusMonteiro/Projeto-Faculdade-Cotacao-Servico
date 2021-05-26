const roteador = require('express').Router()
const TabelaFornecedor = require('./fornecedor/TabelaFornecedor')
const Fornecedor = require('./fornecedor/Fornecedor')




roteador.get('/',async(req,res)=>{
    const resultado = await TabelaFornecedor.listar()
    res.send(JSON.stringify(resultado))
})

roteador.post('/',async(req,res)=>{
    const dados = req.body
    const fornecedor = new Fornecedor(dados)
    await fornecedor.criar()
    console.log(fornecedor)
})

module.exports = roteador