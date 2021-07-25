const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin');
const cors = require("cors");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://appland-e-commerce-default-rtdb.firebaseio.com'
});

app.use(cors({ origin: true }));

app.use('/api/producto', require('./routers/computers'));

exports.app = functions.https.onRequest(app);




