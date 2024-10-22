import user from "../schema/user.js";


export const finduserbyemail = async (email) => {
    try{
       const user = await user.findone({ email });
       return user;
    }catch(error){
        console.log(error);
        
    }
};

