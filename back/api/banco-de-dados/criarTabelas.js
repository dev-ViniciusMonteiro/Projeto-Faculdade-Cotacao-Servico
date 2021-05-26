const ModeloTabela = require('../rotas/fornecedor/modeloTabela')

ModeloTabela.sync().then(()=>{
    console.log("tabela criada com sucesso")
}).catch(console.log)