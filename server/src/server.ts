import express from 'express';
const app = express();
import path from 'path';


// Allow client to request CSS files on the ROOT HOST/
app.use(express.static(path.join(__dirname, 'styles')));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    // res.redirect('/index');
    // res.sendFile(__dirname + '/static/index.html');
});