const path = require('path');
const fs = require('fs');

const uiPort = parseInt(process.env.PORT) || 1880;
const httpAdminRoot = process.env.ADMIN_ROOT || '/';
const httpNodeRoot = process.env.NODE_ROOT || '/api';

// Load the user credentials
let userCreds;
try {
  userCreds = JSON.parse(fs.readFileSync('userCredentials.json', 'utf8'));
} catch (err) {
  userCreds = [
    {
      user: 'admin',
      pass: '$2b$08$OIBSm1tmKL2Smw1drUyeJuDigql.drtlJMEMPdUFiPeHDeA7CQY/2',
      scope: '*',
    },
  ];
}

module.exports = {
  uiPort: uiPort,
  httpAdminRoot: httpAdminRoot,
  httpNodeRoot: httpNodeRoot,
  adminAuth: {
    type: 'credentials',
    users: userCreds,
  },
  functionGlobalContext: {},
  exportGlobalContextKeys: false,
  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false,
    },
  },
  ui: {
    path: '/',
  },
};
