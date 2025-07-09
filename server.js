const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/account', async (req, res) => {
  console.log("This is Account")
  const response = await axios.get('http://localhost:3002/product');
  console.log(response.data)
  res.send(
    { 'data': response.data.data}
  );
});

app.listen(PORT, () => {
  console.log(`Express server listening at  
    http://localhost:${PORT}`);
});
