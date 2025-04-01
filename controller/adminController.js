import Register from "../models/registerSchema.js"
async function base(req,res){

  try {
        const users = await Register.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {
    base,
}