const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
process.env.TOKEN_SECRET;

module.exports = {
  generateAccessToken : (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET);
  }
}