const express = require('express');
const MongoClient = require('mongodb');
const app = express();
const port = 4000;
// const breakfast = {
//     eggs: "over easy",
//     bacon: "crispy",
//     toast: "rye"
// }

const url = "mongodb+srv://admin1blakeffr:Blake4ffr@cluster0-s2mfp.mongodb.net/Meals?retryWrites=true&w=majority"; 
const dbName = "Meals";
const collection = "Breakfast";

app.get("/bacon", (req, res) => {  
    MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error 
        const db = client.db(dbName)
        db.collection(collection).find().toArray((error, result) => {
            if (error) throw error 
            res.send(result)
        })
    })

})

app.listen(port, () => console.log(`serving breakfast at port: ${port}`))