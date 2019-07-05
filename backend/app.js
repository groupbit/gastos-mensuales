server = require("./server")
Gasto = require("./src/gasto")
mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
  
    gastoHome = new Home("gastos", db)
  gastoHome.insert(new Gasto(12/01/2001, "hola"))
  server.register(gastoHome)
  
  server.init();
})
