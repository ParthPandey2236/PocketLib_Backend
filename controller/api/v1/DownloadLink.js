const admin = require('firebase-admin');
const fireStore = admin.firestore();

module.exports.downloadLink = async function(req,res){
    try{
        let data =(await fireStore.collection("Books").doc(req.body.name.toString().trim()).get()).data()['url'];
        console.log(data);
        return res.json(200, {
            url : data,
        });
    }
    catch(e){
        console.log(e.toString());
        return res.json(404, {
            message  : "Book not found",
        });
    }
}