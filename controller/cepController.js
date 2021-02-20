const cepPromise = require('cep-promise')

module.exports = {

    async telaInicial(request, response){
        await response.render('index')
    },

    async buscarCep(request, response){
        const {ceps} = request.body

        await cepPromise(ceps).then(function(dados){

            console.log(dados);
            
            return response.render('index', dados)
            
        }).catch(err => {
            console.log(err)
            response.redirect("/")
        })
        
    }

}
    