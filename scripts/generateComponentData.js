var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');
var beautify = require("json-beautify");

var paths = {
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    components: path.join(__dirname, '../src','assets', 'js' ,'react', 'core', 'Components'),
    output: path.join(__dirname, '../data', 'componentData.js'),
};

const enableWatchMode = process.argv.slice(2) == '--watch';

if (enableWatchMode) {
    // Regenerate component when compoennets or example change.
    chokidar.watch([paths.examples, paths.components]).on('change', function(event, path){
        generate(paths);
    });
} else {
    // Generate component metadata
    generate(paths);
}

function generate(paths) {
    var errors = [];
    if (!fs.existsSync(paths.components)) {
      writeFile(paths.output, "module.exports = [];");
      return;
    }
    var componentData = getDirectories(paths.components).map(function(componentName){
        try {
            return getComponentData(paths, componentName);
        } catch(error) {
            errors.push('an error occured while attempting to generate metadata for ' + componentName + '. ' + error);
        }
    });
    writeFile(paths.output, "module.exports = " + beautify(errors.length ? errors : componentData, null, 4, 80));
}

function getComponentData(paths, componentName) {
    var content = readFile(path.join(paths.components, componentName, componentName + '.jsx'));
    var info = parse(content);
    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(path.join(paths.components, componentName, 'examples'), componentName)
    }
}

function getExampleData(examplesPath, componentName) {
    var examples = getExampleFiles(examplesPath, componentName);
    console.log(examples);
    return examples.map(function(file){
        var filePath = path.join(examplesPath, file);
        var content = readFile(filePath);
        var info = parse(content);
        return {
            name: file.slice(0, -4),
            description: info.description,
            code: content
        };
    });
}

function getExampleFiles(examplesPath, componentName) {
    var exampleFiles = [];
    try {
        exampleFiles = getFiles(examplesPath);
    } catch(error) {
        console.log(chalk.red(`No example found for ${componentName}.`));
    }
    return exampleFiles;
}

function getDirectories(filepath) {
    return fs.readdirSync(filepath).filter(function(file){
        return fs.statSync(path.join(filepath, file)).isDirectory();
    });
}

function getFiles(filepath) {
    return fs.readdirSync(filepath).filter(function(file){
        return fs.statSync(path.join(filepath, file)).isFile();
    });
}

function writeFile(filepath, content) {
    fs.writeFile(filepath, content, function(err){
        err ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved.'));
    });
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
