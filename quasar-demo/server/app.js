const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/user', require('./api/userApi'));
app.use('/api/customer', require('./api/customerApi'));
app.listen(3000); // 可以更改
console.log('success listen at port: 3000');
