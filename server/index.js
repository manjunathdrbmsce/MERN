const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Users')

const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://selvaBMS:selvaBMS@cluster0.eli2h0j.mongodb.net/crud?retryWrites=true&w=majority")
                
//mongoose.connect("mongodb://localhost:27017/crud")

app.get('/', (req,res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getuser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, 
    {name: req.body.name,
    email: req.body.email,
    age: req.body.age})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.post("/createuser", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))

})

app.listen(port, () => {
  console.log('Server is running')
})