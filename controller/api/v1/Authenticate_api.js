const firebase = require('firebase/auth');

const auth = firebase.getAuth();

module.exports.signIn = async function(req,res){
    console.log(req);
    try{
        let user = await firebase.signInWithEmailAndPassword(auth,req.body.email,req.body.password);
        // console.log(await firebase.getAuth().currentUser);
        let token = await firebase.getAuth().currentUser.getIdToken();
        return res.json(200, {
            msg: `Api working ${req.body.email}`,
            token: token
        });
    }
    catch(e){
        return res.json(404, {
            msg: e.toString(),
        });
    }
} 
module.exports.signUp = async function (req, res) {
    console.log(req);
    try {
        let user = await firebase.createUserWithEmailAndPassword(auth, req.body.email, req.body.password);
        // var token = await firebase.getIdToken(user);
        return res.json(200, {
            msg: `User created`,
        });
    }
    catch (e) {
        return res.json(404, {
            msg: e.toString(),
        });
    }
}