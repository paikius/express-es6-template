'use strict';

import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})