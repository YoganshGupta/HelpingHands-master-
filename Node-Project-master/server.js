const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');

const api = require('./server/Routes/api');
const donatorApi = require('./server/Routes/donatorApi');
const medicineApi = require('./server/Routes/medicineApi');
const clothesApi = require('./server/Routes/clothesApi');
const stationaryApi = require('./server/Routes/stationaryApi');
const miscellaneousApi = require('./server/Routes/miscellaneousApi');
const ngoApi = require('./server/Routes/ngoApi');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'/dist')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());


app.use('/api',api);
app.use('/donatorApi',donatorApi);
app.use('/medicineApi',medicineApi);
app.use('/clothesApi',clothesApi);
app.use('/stationaryApi',stationaryApi);
app.use('/miscellaneousApi',miscellaneousApi);
app.use('/ngoApi',ngoApi);

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});

app.listen(port,function(){
    console.log('Server running on port 3000');
});