const express = require('express');
const XeroClient = require('xero-node').AccountingAPIClient;
const path = require('path');
let app = express();

let lastRequestToken = null;
let xeroClient = new XeroClient({
  appType: 'public',
  callbackUrl: 'https://xerobatchleslie.herokuapp.com/callback',
  consumerKey: process.env.consumerKey,
  consumerSecret: process.env.consumerSecret,
  userAgent: 'Tester (PUBLIC) - Application for testing Xero',
  redirectOnError: true
});
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/connect', async function(req, res) {
  lastRequestToken = await xeroClient.oauth1Client.getRequestToken();

  let authoriseUrl = xeroClient.oauth1Client.buildAuthoriseUrl(
    lastRequestToken
  );
  res.redirect(authoriseUrl);
});

app.get('/callback', async function(req, res) {
  let oauth_verifier = req.query.oauth_verifier;
  let accessToken = await xeroClient.oauth1Client.swapRequestTokenforAccessToken(
    lastRequestToken,
    oauth_verifier
  );
  res.redirect('/');
});

app.get('/batches', async function(req, res) {
  let batches = await xeroClient.oauth1Client.get('batchpayments');
  res.json(batches);
});

app.get('/single', async function(req, res) {
  let batches = await xeroClient.oauth1Client.get(
    `batchpayments/${req.query.id}`
  );
  res.json(batches);
});

module.exports = app;
