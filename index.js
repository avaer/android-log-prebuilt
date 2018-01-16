const path = require('path');
const binding = require(path.join(__dirname, 'dist', 'android-log.node'));

module.exports = binding;
