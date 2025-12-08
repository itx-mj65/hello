const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/your-database-name').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const Usershema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', Usershema);


app.post("/create", async (req,res)=>{
    const {name, email, password} = req.body;
    const newUser = new User({
        name,
        email,
        password
    });
    
    await newUser.save()
    res.json({message: "User created successfully from backend" });

})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})