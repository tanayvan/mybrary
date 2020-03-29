const mongoose=require('mongoose')


const authorSchema=new mongoose.Schema({

    name: {

        required: true,
        type: String,
        
    }
})

module.exports=mongoose.model('Author',authorSchema)