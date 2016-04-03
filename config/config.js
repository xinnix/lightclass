module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.LIGHTCLASS_DB_URI || 'mongodb://localhost/lightclass',
  dbtest: 'mongodb://xinnix:xinxin@ds061611.mlab.com:61611/lightclass',
};
