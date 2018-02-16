const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')

const server = express()
const bot = new Botact({
    token: 'd6c009313d7b63d75944cdd0868b6c1e1311fb0bad143b470bc4d4127bff743e4cdfdeea3905257f86677',
    confirmation: 'f4e50063'
})

bot.on(function (ctx) {
    console.log(ctx.body)
    
    ctx.reply('Приветики!')
})

server.use(bodyParser.json())

server.post('/', bot.listen)

server.listen(80)