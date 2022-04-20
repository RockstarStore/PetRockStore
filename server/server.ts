const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const loginRouter = require('./routers/users');
const shopRouter = require('./routers/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../build')));

//user login and creation routers
app.use('/users', loginRouter);
//shopping cart router
app.use('/shop', shopRouter);

app.get('/*', (req: any, res: any) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req: any, res: any) => {
  console.log('404 Error Caught Here');
  res.status(404).send("This is not the page you're looking for...");
});

// Global error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
