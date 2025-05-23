let express = require('express');
let app = express();   

app.use(express());

app.use(express.static(__dirname + '/dist/eco-ride/browser/'));

app.get('/*'), (req, res) => {
    res.sendFile(__dirname + '/dist/eco-ride/browser/index.html');
}

app.listen(process.env.PORT || 8080);