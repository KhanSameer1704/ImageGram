import mongoose from "mongoose";

const userschema = new mongoose.Schema({
       username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 12
       },
       email: {
        type: string,
        unique: true,
        require: true,
        validate: {
            validator: function (emailvalue){
                return/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(emailvalue);
            },
            message: 'Invalid email format'
        }
        
       },
       password: {
        type: string,
        required: true,
        minlength: 5
}
},{ timestamps: true});


const user = mongoose.model("user",userschema); //user collection

export default user;

