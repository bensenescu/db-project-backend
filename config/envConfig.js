const fs = require('fs');
const mysql = require('mysql');

export default {
  connection: mysql.createConnection({
    host: '34.73.147.161',
    user: 'root',
    password: 'password1',
    database: 'calendar',
    ssl: {
      ca: fs.readFileSync(`${process.cwd()}/certs/server-ca.pem`),
      key: fs.readFileSync(`${process.cwd()}/certs/client-key.pem`),
      cert: fs.readFileSync(`${process.cwd()}/certs/client-cert.pem`),
    },
  }),
};
