const admin = require('firebase-admin');

const express = require('express');

const app = express();

var serviceAccount = require("./carshare-f9266-firebase-adminsdk-ghw1t-bdef59f77d.json");

app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.post('/send-noti', (req, res) => {
    const message={
        notification:{
            title:"New Add",
            body:"new add click to open"
        },
        tokens:req.body.tokens
    }
    
    admin.messaging().sendMulticast(message).then(res=>{
        console.log("send success");
    }).catch(err=>{
        console.log(err)
    })
})


app.listen(3000, () => {
    console.log('Server Running')
})

