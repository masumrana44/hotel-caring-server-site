const express=require('express')
const hotelRoom=require('./hotelRoom.json')
const app =express();
const port=process.env.PORT ||5000;


app.get('/',(req,res)=>{
    res.send('hello Wold')
})
app.get('/hotelroom',(req,res)=>{
    res.send(hotelRoom);
})


app.listen(port,()=>{
    console.log(`Your server has running on port ${port}`)
})