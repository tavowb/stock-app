const express = require('express')

const app = express()

app.get('/', (req, res) => {

    console.log('Petición recibida node mun')

    res.send('<h1> Un titulo que dice todo </h1>')

})

app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000')
})