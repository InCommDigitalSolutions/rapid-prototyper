const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.json({"return": "some JSON!"})
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})