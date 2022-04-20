const express = require('express')
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const Person = require('./models/person')
const Pet = require('./models/pet')
const User = require('./models/user');
const { authenticate } = require('./middlewares/auth');
const app = express()
const port = 2000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user/register', async(req, res)=>{
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  let payload = req.body
  res.json(await User.create(payload))
})

app.post('/user/login', async(req, res)=>{

  let user = await User.findOne({where: {username: req.body.username}})

  if(!user){
    return res.json({
        message: "Invalid username/password"
    })
  }

  const matchUser = bcrypt.compareSync(req.body.password, user.password)

  if(!matchUser){
    return res.json({
      message: "Invalid username/password"
    })
  }

  const payload = {
    id: user.id,
    username: user.username
  }
  
  const access_token = jsonwebtoken.sign(payload, "inisecretkey",{expiresIn: "2m"})

  return res.json({
    access_token
  })
  
})

app.use(authenticate)

app.get('/user/getdata', async (req, res)=>{
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})