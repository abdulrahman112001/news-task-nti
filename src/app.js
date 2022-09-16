// const { response } = require("express")
const request = require('request')
const express = require('express')
const app = express()
const hbs= require('hbs')
const path = require('path')
const viewPath = path.join(__dirname,"../template/views")
const partialsPath = path.join(__dirname,"../template/partials")
const port = process.env.PORT || 3000
app.set('view engine', 'hbs');
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

const url ='https://newsapi.org/v2/everything?q=tesla&from=2022-08-16&sortBy=publishedAt&apiKey=75dd8eb880c34f65a2b170c94fff1612' 
    request({url,json:true},(error,response)=>{
        const data = response.body.articles
        // console.log(data)

    app.get("/",(req,res)=>{
        res.render('index',{
            data,
            title:'news'
            
        })
    })  

})

app.listen(port, () => {
    console.log('Example app listening on port' + port)
  })