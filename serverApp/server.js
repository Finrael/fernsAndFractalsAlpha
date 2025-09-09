const express = require('express')
const cors = require('cors')
const app = express() 
const corsOptions ={
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.json({message: 'Welcome To fenrs and fractals'})
})
// require('./routes/fandf.routes.js')(app)
let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log('Server connected and listening on :', PORT)
})