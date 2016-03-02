module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.HBG_DEV_URI || 'mongodb://localhost/hbg',
  dbName: 'lightclass-dev'
}
