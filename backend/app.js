server = require("./server")
Gasto = require("./src/gasto")
mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
  
gastoHome = new Home("gastos", db)
gastoHome.insert(new Gasto("12-02-2018","alumbrado", "1200"))
server.register(gastoHome)
  
  server.init();
})
