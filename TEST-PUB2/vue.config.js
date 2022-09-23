module.exports = {  publicPath: '/TEST-PUB2/'};

module.exports = {  publicPath: process.env.NODE_ENV === "production" ? "/TEST-PUB2/" : "/",};