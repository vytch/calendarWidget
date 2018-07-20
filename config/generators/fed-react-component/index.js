const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Adds a react PureComponent that will be used by your browser',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Core',
      choices: () => ['Core'],
    },
    {
      type: 'list',
      name: 'extends',
      message: 'Choose a base component',
      default: 'React.Component',
      choices: () => ['Component', 'PureComponent'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      validate: (value, answers) => {
        if ((/.+/).test(value)) {
          const checkPath = `./src/assets/js/react/${answers.type === 'Core' ? 'core' : `modules/${answers.module}`}/components/${value}`;
          return fs.existsSync(checkPath) ? 'That component already exists.' : true;
        }
        return 'A name is required.';
      },
    },
  ],
  actions: (data) => {
    const rootPath = `../../src/assets/js/react/${data.type === 'Core' ? 'core' : `modules/${data.module}`}/Components/{{properCase name}}`;
    const actions = [{
      type: 'add',
      path: `${rootPath}/{{properCase name}}.jsx`,
      templateFile: data.extends === 'Component' ?
        './fed-react-component/component-class.js.hbs' : './fed-react-component/pure-component-class.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/index.js`,
      templateFile: './fed-react-component/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${rootPath}/tests/{{properCase name}}.test.js`,
      templateFile: './fed-react-component/test.js.hbs',
      abortOnFail: true,
    },

    ];
    return actions;
  },
};
