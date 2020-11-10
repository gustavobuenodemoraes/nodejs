const uri = "mongodb+srv://desenvolvedor:mariokart@videoaula.lziip.gcp.mongodb.net/todolist?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongodb online");
})

module.exports = mongoose;