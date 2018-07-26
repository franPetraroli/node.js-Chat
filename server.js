//DEPENDECIES
const express = require('express'),
      app = express(),
      http = require('http').Server(app);
      io = require('socket.io')(http),
      mongoose = require('mongoose');

      
mongoose.connect('mongodb://frapetim:telecono0@ds255451.mlab.com:55451/chat-wdi');
let db = mongoose.connection;
      
//IMPORT MODELS
const ChatModel = require('./models/chat');

//CHECK FOR DB ERROR
db.on('error', (ERR)=>{
  console.log(err);
})
io.on('connection',(socket)=>{
  console.log('User Connected');
  
  // console.log(socket.handshake.query);

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
    socket.disconnect()
  });
})


http.listen(8080, ()=>{
  console.log('listening on port 8080...');
})

app.get('/:current/:target', function(req, res){
  // console.log("Current is: " + req.params.current)
  // res.sendFile(__dirname + '/index.html');
  });

// let doc = ChatModel.findOne({username: socket.handshake.query.current})
//   if (doc.length){
//     console.log('it exist'); 
//   }else{
//     chat = new ChatModel({username: socket.handshake.query.current})
//     chat.save()
//   }