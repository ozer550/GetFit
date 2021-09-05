const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/bmi', (req, res) => {
  res.render('bmi');
});

app.get('/underweight', (req, res) => {
  res.render('bmi');
});

app.get('/healthy', (req, res) => {
  res.render('bmiCategories/healthy');
});

app.get('/overweight', (req, res) => {
  res.render('bmi');
});



app.post('/bmi', (req, res) => {
  const height = req.body.height;
  const weight = req.body.weight;

  const bmi = weight/(height*height);

  console.log(bmi);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
