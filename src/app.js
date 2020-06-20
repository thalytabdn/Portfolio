const express = require('express');
const app = express();
const path = require('path');

app.set('port', 8080);
app.set('view engine', 'ejs');
app.use(express.static(path.normalize(__dirname, 'public')));


app.get('/', (request,response) => {
    response.sendfile(path.resolve(__dirname, 'index.html'));
    
});

app.listen(app.get('port'), () => {
    console.log("server ok", app.get('port'));
});