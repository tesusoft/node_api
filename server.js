const express = require('express');
const app = express();
const Product = require('./models/productModel');

app.use(express.json());

const mongoose = require('mongoose');
const { json } = require('body-parser');

//routes
app.get('/', (req, res) => {
res.send('Welcome, This is Node API');
});

app.get('/blog', (req, res) => {
    res.send('Welcome, To NodeJS Blog Page');
    });
//Load all Products
app.get('/products', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
        console.log(products);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})
//Get a single product
app.get('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})

app.post('/products', async(req, res) => {

    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);

    }
    catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
console.log(req.body);
//res.send(req.body);
})

//Update things a product
app.put('/products/:id',  async(req, res) => {
try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product){
        return res.status(404).json({message: `cannot find any product with ID: ${id}`})
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
} catch{
    console.log(error.message);
        res.status(500).json({message:error.message});
}
});

mongoose.set('strictQuery',false);
mongoose.
connect('mongodb+srv://tesukidney:HntzkhDj80fzMYkW@cluster0.vbnapj3.mongodb.net/?retryWrites=true&w=majority')
.then( () => {
        console.log('connected to MongoDB')
        app.listen(3000, () => {
            console.log('Node API is running on port 3000');
        });
}).catch((error) =>{
    console.log('Could not connect to Mongo DB', error);
})
/** 
app.listen(3000, () => {
console.log('Node API is running on port 3000');
});
*/



console.log("Hello");
