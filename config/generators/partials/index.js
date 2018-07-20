const fs = require('fs');
const path = require('path');
const trimTemplateFile = require('../utils/trimTemplateFile');
const getDirectories = require('../utils/getDirectories');

module.exports = {
  description: 'Add a partial to the project.',
  prompts: [
    {
      type: 'list',
      name: 'directory',
      message: 'Partial location?',
      choices: () => {
        const values = getDirectories('./src/partials', '').filter(path => path.indexOf('/') !== -1);
        console.log(values);
        return values;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the partial?',
      validate: (value, answers) => {
        if ((/.+/).test(value)) {
          const checkPath = `src/partials/${answers.directory}/${value}`;
          return fs.existsSync(checkPath) ? 'That component already exists.' : true;
        }
        return 'A name is required.';
      },
    },
  ],
  actions: (data) => {
    const rootPath = `../../src/partials/${data.directory}/{{properCase name}}`;
    console.log(data);
    return [{
      type: 'add',
      path: `${rootPath}/{{properCase name}}.jsx`,
      templateFile: './partials/component-class.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/index.js`,
      templateFile: './partials/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/style.scss`,
      templateFile: './partials/style.scss.hbs',
      abortOnFail: true,
    }

    ];
  },
};
