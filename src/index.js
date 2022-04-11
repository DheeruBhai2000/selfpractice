const express = require('express');
var bodyParser = require('body-parser');
const mongoose=require('mongoose')
const route = require('./routes/route.js');
const { use } = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongoose.connect("mongodb+srv://dheerubhai2000:gqG*2JVkTEt5T*G@cluster0.hk6qb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(  ()=>console.log("MongoDb is connected"))
.catch( err => console.log(err))

app.use('/', route);



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
