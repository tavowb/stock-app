require('dotenv').config()

const express = require('express')
const app = express()



app.get('/', (req, res) => {

    console.log('Petición recibida node mun')

    res.send('<h1> Un titulo que dice todo </h1>')

})

/*Creo una variable local de puerto*/
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`) 
})