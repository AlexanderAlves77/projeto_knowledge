const mongoose = require("mongoose") 
mongoose.connect('mongodb://localhost/knowledge_stats', { 
    useNewUrlParser: true
}).catch(err => {
    const msg = "ERRO! Não foi possível conectar com o MongoDB!"
    console.log('\1xb[41m%s\x1b[37m', msg, '\x1b[0m')
})
 