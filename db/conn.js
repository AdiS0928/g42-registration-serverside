const mongoose = require('mongoose');

const DB = "mongodb+srv://ahmedfayazyousuf:ahmed12345@cluster0.mokei0l.mongodb.net/G42UsersData?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(err);
}) 