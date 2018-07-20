const fs = require('fs');
const path = require('path');

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


const getDirectories = (currentPath, context) => {

  if (typeof context === 'undefined') {
    constext = "";
  }

  // Get all the directories that are not components.
  let output = [...fs.readdirSync(currentPath).filter(item => {
    return fs.statSync(path.join(currentPath, item)).isDirectory() && !fs.existsSync(path.join(currentPath, item, 'index.js'));
  })];

  // For each directory, checkj if there are ano child directories that are not components.
  output.forEach(item => {
    flatten(getDirectories(path.join(currentPath, item), item)).forEach(sub => {
      output.push(sub)
    });
  });

  // For each path found, attach the parent folder.
  return output.map(item => path.join(context,item));
}

module.exports = getDirectories;
