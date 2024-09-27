const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello Worldddddd');
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
