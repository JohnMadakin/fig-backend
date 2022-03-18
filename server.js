require('dotenv').config();
const app = require('./app');
const config = require('./config/app')

function startApp() {
  app.listen(config.port, () => {
    console.log(`App is running on port: ${config.port}`);
  });
}

startApp();
