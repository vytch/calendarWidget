const fs = require('fs');
const path = require('path');
const trimTemplateFile = require('../utils/trimTemplateFile');
const getDirectories = require('../utils/getDirectories');

module.exports = {
  description: 'Add a static page to the project',
  prompts: [
    {
      type: 'list',
      name: 'directory',
      message: 'Template location?',
      choices: () => {
        const values = ['.', ...getDirectories('./src/templates', '')];
        console.log(values);
        return values;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      validate: (value, answers) => {
        if ((/.+/).test(value)) {
          const checkPath = `src/templates/${answers.directory}/${value}`;
          return fs.existsSync(checkPath) ? 'That component already exists.' : true;
        }
        return 'A name is required.';
      },
    },
  ],
  actions: (data) => {
    const rootPath = `../../src/templates/${data.directory}/{{properCase name}}`;
    console.log(data);
    return [{
      type: 'add',
      path: `${rootPath}/{{properCase name}}.jsx`,
      templateFile: './templates/component-class.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/index.js`,
      templateFile: './templates/index.js.hbs',
      abortOnFail: true,
    }

    ];
  },
};
