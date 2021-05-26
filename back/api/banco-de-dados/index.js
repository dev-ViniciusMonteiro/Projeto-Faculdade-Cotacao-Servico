const sequalise = require('sequelize')

const instancia = new sequalise(
    "fornecedor",
    "root",
    "admin",
    {
      host: "127.0.0.1", 
      dialect: 'mysql' 
    }   
)

module.exports=instancia