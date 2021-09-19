import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
const app = express();


dotenv.config()

app.get('/', (req,res) =>{

})

app.get('/api/products', (req,res) =>{
    res.json(products);
})
app.get('/api/products/:id', (req,res) =>{
    const product=products.find((p) =>
        p._id === req.params.id)
    res.json(product);
})

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));