const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/dogs', (req, result, next) => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
    result.json(response.data)
  });
})

app.get('/api/breeds/image/random', (req, result, next) => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
        results.json(results.message)
    });
})

// app.get("/api/dogs/:id/images", (req, result, next) => {
//     axios.get(`https://dog.ceo/api/breed/${req.params.id}/images`).then(response => {
//         result.json(response.message)
//     });
    app.get("/api/dogs/:id", (req, result, next) => {
        axios.get(`https://dog.ceo/api/breed/${req.params.id}/images`).then(response => {
            
            result.json(response.data.message);
        });
})
// run `npm run build` to create a build folder
// // then serve that folder with express static
// app.use(express.static(__dirname + '../public/'));

// app.get('/api/heroes', (req, res, next) => {
//     axios.get('http://swapi.co/api/people').then(response => {
//         res.json(response.data);
//     }).catch(console.log);
// });

// app.get('/api/heroes/:id', (req, res, next) => {
//     axios.get(`http://swapi.co/api/people/${req.params.id}`).then(response => {
//         res.json(response.data);
//     }).catch(console.log);
// })




app.listen(port, () => {
    console.log(`Whats cooking on port: ${port}`);
});