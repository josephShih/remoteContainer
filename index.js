const express = require('express') 
const app = express()
const port = 8899
const host = '0.0.0.0'
// app.use('/', require('./src/html/show.html'))

app.get('/user', (req,res)=>{
  res.json({'user':{'name':'jack','age':'10'}})
})
app.use('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port,host, err =>{
  if(err) throw err
  console.log(`${host}:${port} is running` )
})
