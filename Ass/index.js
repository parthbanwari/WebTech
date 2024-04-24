const express = require('express');
const path = require('path');
const ejs = require('ejs');
const PORT=3000;

const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
  res.render(__dirname +'/pages/index');
});
app.get("/login",(req,res)=>{
    res.render(__dirname +'/pages/login');
  });
app.listen(PORT,()=>{
console.log(
    `listning ${PORT}`
)
})