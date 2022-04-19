const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('/*', (req: any, res: any) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
