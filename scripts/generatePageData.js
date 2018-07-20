const path = require('path');
const chokidar = require('chokidar');
var chalk = require('chalk');
const fs = require('fs');
const routes = require('../data/routeData.json');
var beautify = require("json-beautify");

const enableWatchMode = process.argv.slice(2) == '--watch';

function flatten() {
    var flat = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push.apply(flat, flatten.apply(this, arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}

const paths = {
  templates: path.join(__dirname, '../src', 'templates'),
  styleguides: path.join(__dirname, '../src', 'styleguides'),
  output: path.join(__dirname, '../data', 'routeData.json'),
  outputTemplatePaths: path.join(__dirname, '../data', 'templatePaths.json'),
  outputStyleguidePaths: path.join(__dirname, '../data', 'styleguidePaths.json'),
};

const getDirectories = (filepath, context) => {
  if (!fs.existsSync(filepath)) {
    return [];
  }

  return fs.readdirSync(filepath).filter(file => {
    return file.indexOf('.') != 0 && file.indexOf('.md') === -1;
  }).map(function(file){
    if(fs.statSync(path.join(filepath, file)).isDirectory() && fs.existsSync(path.join(filepath, file, 'index.js'))){
      return file;
    } else {
      return getDirectories(path.join(filepath, file), file);
    }
  });
}

const getPaths = (filepath, context) => {
  if (!fs.existsSync(filepath)) {
    return [];
  }

  return fs.readdirSync(filepath).filter(file => {
    return file.indexOf('.') != 0 && file.indexOf('.md') === -1;
  }).map(function(file){
    if(fs.statSync(path.join(filepath, file)).isDirectory() && fs.existsSync(path.join(filepath, file, 'index.js'))){
      return {
        name: file,
        label: `${context.replace('/', ' > ')} > ${file}`,
        path: path.join(context, file)
      };
    } else {
      return getPaths(path.join(filepath, file), path.join(context, file));
    }
  });
}

const updateTemplateList = list => {
  return routes.routes.map(route => {
    if(route.path === '/templates'){
      route.childRoutes.map(childroute => {
        if(childroute.path === "/templates/:template"){
          childroute.params.componentList = list;
        }
        return childroute;
      });
    }
    return route;
  });
}

const updateStyleguideList = list => {
  return routes.routes.map(route => {
    if(route.path === '/styleguide'){
      route.childRoutes.map(childroute => {
        if(childroute.path === "/styleguide/:component"){
          childroute.params.componentList = list;
        }
        return childroute;
      });
    }
    return route;
  });
}

const writeFile = (filepath, content) => {
    fs.writeFile(filepath, content, function(err){
        err ? console.log(chalk.red(err)) : console.log(chalk.green('Compoenent data saved.'));
    });
}

const generate = paths => {

  const templates = flatten(getDirectories(paths.templates, ''));
  // console.log('templates:', templates);

  const templatePaths = flatten(getPaths(paths.templates, ''));
  // console.log('templatePaths:', templatePaths);

  const styleguides = flatten(getDirectories(paths.styleguides, ''));
  // console.log('styleguides:', styleguides);

  const styleguidePaths = flatten(getPaths(paths.styleguides, ''));
  // console.log('styleguidePaths:', styleguidePaths);

  let routes = updateStyleguideList(styleguides);
  routes = updateTemplateList(templates);

  writeFile(paths.output, beautify({
    routes
  }, null, 4, 80));
  writeFile(paths.outputTemplatePaths, beautify( templatePaths, null, 4, 80));

  writeFile(paths.outputStyleguidePaths, beautify( styleguidePaths, null, 4, 80));
}

if (enableWatchMode) {
    // Regenerate component when compoennets or example change.
    chokidar.watch([paths.templates]).on('change', function(event, path){
        generate(paths);
    });
} else {
    // Generate component metadata
    generate(paths);
}
