const express = require('express')

const cepController = require('./controller/cepController')

const Handlebars = require('handlebars')
const expressHandlebars =  require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const bodyparser = require('body-parser')

const port = 8180

const app = express()

//Conf Handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars')
app.use(express.static('public'));

//Conf body-parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


//rotas
app.get('/', cepController.telaInicial)
app.post('/', cepController.buscarCep)


app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})