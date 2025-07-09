const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;;

app.get('/product', (req, res) => {
  res.send(
    { 'data': "Hi I'm Product!" }
  );
});


app.listen(PORT, () => {
  console.log(`Express server listening at  
    http://localhost:${PORT}`);
});
