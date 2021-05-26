const sequalize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    NAME: {
        type: sequalize.STRING(50),
        allowNull: false
    },EMAIL: {
        type: sequalize.STRING(50),
        allowNull: false
    },ITEM: {
        type: sequalize.STRING(150),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
}

module.exports = instancia.define('fornecedor', colunas , opcoes)