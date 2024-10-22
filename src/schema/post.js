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
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     }
});


const post = mongoose.model("post",postschema);

export default post;