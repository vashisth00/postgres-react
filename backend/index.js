var fs= require('fs');
var data = fs.readFileSync("./product.json", "utf8");
var elements = JSON.parse(data);
const express = require('express');
const cors =  require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./queries');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/products/orders/', db.getOrders);
app.post('/products/orders/', db.createOrder);

app.listen(3001, () => (
console.log("Server started")
));

app.get('/products', alldata);
 
function alldata(req, res) {
    res.json(elements);
}

app.get('/products/:id', getElement);

function getElement(req, res) {
    var id = req.params.id;
    var element = elements.filter(function(element) {
        return element.id === id;
    });
    res.json(element[0]);
}

app.use(cors());
app.use(express.static('public'));
