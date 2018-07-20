const fs = require('fs');
const path = require('path');
const trimTemplateFile = require('../utils/trimTemplateFile');
const getDirectories = require('../utils/getDirectories');

const paths = {
  "docs": `./src/docs/modules`,
  "templates": `./src/assets/js/modules`
};

const modify = {
  "docs": `./src/assets/js/doc-script.jsx`,
  "templates": `./src/assets/js/modules/habitat.js`
};

const importScript = {
  "docs": 'config/generators/modules/import.docs.js.hbs',
  "templates": 'config/generators/modules/import.fed.js.hbs'
};

const registerScript = {
  "docs": 'config/generators/modules/register.fed.js.hbs',
  "templates": 'config/generators/modules/register.fed.js.hbs'
};

module.exports = {
  description: 'Adds a react container for your browser.',
  prompts: [
    {
      type: 'list',
      name: 'directory',
      message: 'Module location?',
      choices: () => {
        return ["docs", "templates"];
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the module?',
      validate: (value, answers) => {
        if ((/.+/).test(value)) {
          const path = paths[answers.directory];
          const checkPath = `${path}/${value}`;
          return fs.existsSync(checkPath) ? 'That module already exists.' : true;
        }
        return 'A name is required.';
      },
    },
  ],
  actions: (data) => {
    const rootPath = `../../${paths[data.directory]}/{{properCase name}}`;
    console.log(trimTemplateFile('config/generators/modules/import.fed.js.hbs'));
    return [{
      type: 'add',
      path: `${rootPath}/{{properCase name}}.jsx`,
      templateFile: './modules/module.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/index.js`,
      templateFile: './modules/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/style.scss`,
      templateFile: './modules/style.scss.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: `../../${modify[data.directory]}`,
      pattern: /(\/\/ \[PLOP-MARKER-IMPORT\])/g,
      template: trimTemplateFile(importScript[data.directory]),
      abortOnFail: true,
    }, {
      type: 'modify',
      path: `../../${modify[data.directory]}`,
      pattern: /(\/\/ \[PLOP-MARKER-REGISTRY\])/g,
      template: trimTemplateFile(registerScript[data.directory]),
      abortOnFail: true,
    }

    ];
  },
};
