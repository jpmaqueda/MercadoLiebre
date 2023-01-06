const express = require(`express`);
const app = express();
const path = require(`path`);
const daemon = require(`daemon`);

// ESTO ES MUCHO MUY IMPORTANTE PORQUE SI NO NO VEO LAS IMAGENES
const publicpath = path.join(__dirname, `./`);
app.use(express.static(publicpath));
//ESTO ES UN DIVISOR

app.listen(3030, () => {
  console.log("Servidor Corriendo");
});

app.get(`/`, (req, res) => {
  let htmlpath = path.join(__dirname, `./views/home.html`);
  res.sendFile(htmlpath);
});
