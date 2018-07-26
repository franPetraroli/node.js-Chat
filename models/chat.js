const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
  user:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  },
  date_time:{
    type : Date, 
    default: Date.now,
    required: true
  }
})

let SingleChat = new Schema({
  otherUser:{
    type: String,
    required: true
  },
  messages: [Message]
})

let Chat = new Schema({
  username: String,
  conversation: [SingleChat]
})

module.exports = mongoose.model('Chat', Chat);