const admin = require('firebase-admin');

const express = require('express');

const app = express();

var serviceAccount = require("./carshare-f9266-firebase-adminsdk-ghw1t-bdef59f77d.json");

app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.post('/send-notification', (req, res) => {
    console.log(req.body)
    // const message={
    //     notification:{
    //         title:"New Add",
    //         body:"new add click to open"
    //     },
    //     token:'e1ZwkX6hRRWvoRg335qf17:APA91bFu1ZlD6kdC_inU6qlygA5xnybpPserAywogiDhtXvgfVlAQAIXS50IABHOZgWPdkBsAW3tt1DtGhtg1X1RR1GvOI_9KwX5A3Ic7LS57nOgu43VOvy9W95LCombJlsFejWjiOOR'
    // }
    
    // admin.messaging().send(message).then(res=>{
    //     console.log("send success");
    // }).catch(err=>{
    //     console.log(err)
    // })
})


app.listen(3000, () => {
    console.log('Server Running')
})

