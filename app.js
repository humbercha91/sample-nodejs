const express = require('express');
const RED = require('node-red');

const app = express();
const http = require('http').Server(app);

const redSettings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/api',
  userDir: './nodered/',
  functionGlobalContext: {},
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "admin",
        password: "$2b$08$OIBSm1tmKL2Smw1drUyeJuDigql.drtlJMEMPdUFiPeHDeA7CQY/2",
        permissions: "*"
      }
    ]
  }
};

RED.init(http, redSettings);
app.use(redSettings.httpAdminRoot, RED.httpAdmin);
app.use(redSettings.httpNodeRoot, RED.httpNode);

const PORT = process.env.PORT || 8080;

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  RED.start();
});
