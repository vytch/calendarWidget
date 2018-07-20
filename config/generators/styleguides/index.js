const fs = require('fs');
const path = require('path');
const trimTemplateFile = require('../utils/trimTemplateFile');
const getDirectories = require('../utils/getDirectories');

module.exports = {
  description: 'Add a styleguide page to the project',
  prompts: [
    {
      type: 'list',
      name: 'directory',
      message: 'Styleguide location?',
      choices: () => {
        const values = getDirectories('./src/styleguides', '');
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
          const checkPath = `src/styleguides/${answers.directory}/${value}`;
          return fs.existsSync(checkPath) ? 'That component already exists.' : true;
        }
        return 'A name is required.';
      },
    },
  ],
  actions: (data) => {
    const rootPath = `../../src/styleguides/${data.directory}/{{properCase name}}`;
    console.log(data);
    return [{
      type: 'add',
      path: `${rootPath}/{{properCase name}}.jsx`,
      templateFile: './styleguides/component-class.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/index.js`,
      templateFile: './styleguides/index.js.hbs',
      abortOnFail: true,
    }

    ];
  },
};
