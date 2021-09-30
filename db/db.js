const mongoose = require("mongoose");

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/gym-participantes');
  console.log("connection succesfull");
}
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
     age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }
})

// creating new ollection
const Member = new mongoose.model('Member', memberSchema);
module.exports = Member
