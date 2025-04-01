async function register(req,res){
    res.json("register api working")
}
async function login(req,res){
    res.json("login api working")
}
async function forgotPassword(req,res){
    res.json("forgot api working")
}

export default {
    register,
    login,
    forgotPassword,
}