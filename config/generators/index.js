const templateGenerator = require('./templates/index.js');
const styleguideGenerator = require('./styleguides/index.js');
const partialGenerator = require('./partials/index.js');
const moduleGenerator = require('./modules/index.js');
const fedReactComponentGenerator = require('./fed-react-component/index.js');

module.exports = (plop) => {
  plop.addHelper('uppercase', (text) => {
    return text.toUpperCase();
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setGenerator('Page', templateGenerator);
  plop.setGenerator('Styleguide', styleguideGenerator);
  plop.setGenerator('Partial', partialGenerator);
  plop.setGenerator('FED react module', moduleGenerator);
  plop.setGenerator('FED react component', fedReactComponentGenerator);

}
