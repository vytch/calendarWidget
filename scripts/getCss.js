const fs = require('fs');

const getCssContent = () => {
  return fs.readFileSync('./testStyles/bootstrap.css', 'utf8');
}

module.exports = getCssContent;