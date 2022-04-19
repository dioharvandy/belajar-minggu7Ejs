const express = require('express')
const Person = require('./models/person')
const Pet = require('./models/pet')
const User = require('./models/user')
const app = express()
const port = 2000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', async (req, res)=>{
  const user = await User.findAll()
  res.json(user)
})

app.get('/person', async (req, res)=>{
  const person = await Person.findAll({
    //include: Pet
  })
  res.json(person)
})

app.get('/pet', async (req, res)=>{
  const pet = await Pet.findAll({
    //include: Person
  })
  res.json(pet)
})

app.post('/user', async(req, res)=>{
  let payload = req.body
  res.json(await User.create(payload))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})