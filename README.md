https://www.youtube.com/watch?v=Fa4cRMaTDUI

vuejs and node project sample



npm init -f
npm install --save nodemon
npm install --save eslint

node ./node_modules/eslint/bin/eslint.js --init

  "scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
  
npm uninstall eslint  
npm install --save express body-parser cors morgan


npm start



npm install --save sequelize sqlite3@3.1.8


npm install --save joi

npm install --save vuetify

npm install --save jsonwebtoken

npm install --save bcrypt-nodejs

npm install --save bluebird

npm install --save vuex

npm install --save vuex-router-sync