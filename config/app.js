module.exports = {
  port: process.env.PORT || 2321,
  environment: process.env.NODE_ENV,
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    uri: process.env.DB_URI,
  },
};
