import mongoose from 'mongoose';

const postschema = new mongoose.Schema({
     caption: {
        type: String,
        required: true,
        minlength: 5
     },
     image: {
        type: String,
        required: true
     },
     user: {
        type: mongoose.Schema.Types.ObjectId, //  This is used to reference an object ID from another document in MongoDB. 
        ref: "user" //The ref option tells Mongoose which model to refer to. In this example, it’s referencing a model called User
     }
});


const post = mongoose.model("post",postschema);

export default post;