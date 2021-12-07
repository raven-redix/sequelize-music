const express = require('express')
const path= require('path')
const { Musician, Band } = require('./index')

//require models and associations^^^

//configure express app
const app = express() 
const port = 3000

//app.use(express.static(path.join(__dirname, 'public')))

//from yesterday
//return all musicians
app.get('/musicians', async (request, response) => {
  //find all instances of musicians 
  const allMusicians = await Musician.findAll()
  response.json(allMusicians)
})

//new things

//using query instead of params as suggested by Muneer, but not sure if it works
// app.get('/musicians/:id', async (request, response) => {
//   //find all instances of musicians 
//   const thisMusician = await Musician.findByPk(request.query.id)
//   response.json(thisMusician)
// })

//return on musician by id
// app.get('/musicians/:id', async (request, response) => {
//   //find all instances of musicians 
//   const thisMusician = await Musician.findByPk(request.params.id)
//   response.json(thisMusician)
// })

//if we were to have '/musician/:name' in the example below, it wouldn't work because
//express would be confused as to which one to use 

//to find by a property of the model
// app.get('/musician-name/:name', async(request, response) => {
//   const thisMusician = await Musician.findOne({ where: {name: request.params.name}})
//   response.json(thisMusician)
// })

// app.get('/bands', async (request, response) => {
//   //find all instances of bands 
//   const allBands = await Band.findAll()
//   response.json(allBands)
// })

// app.get('/bands/:id', async (request, response) => {
//   //find all instances of musicians 
//   const thisBand = await Band.findByPk(request.params.id)
//   response.json(thisBand)
// })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})