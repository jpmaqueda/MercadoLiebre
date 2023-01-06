const express = require(`express`);
const app = express();
const path = require(`path`);
const daemon = require(`daemon`);

// ESTO ES MUCHO MUY IMPORTANTE PORQUE SI NO NO VEO LAS IMAGENES
const publicpath = path.join(__dirname, `./`);
app.use(express.static(publicpath));
//ESTO ES UN DIVISOR

const port = process.env.port || 3005;
app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`));

app.get(`/`, (req, res) => {
  let htmlpath = path.join(__dirname, `./views/home.html`);
  res.sendFile(htmlpath);
});
