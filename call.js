var http = require('http')
var https = require('https')
const fetch = require('node-fetch')
var request = require("request")


var Request = require("request");

Request.get("http://localhost:3000/api/products", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
