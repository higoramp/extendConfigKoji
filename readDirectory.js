const fs = require('fs');

// Recurse through all directories to find koji dotfiles
const readDirectory= function (directory) {
  let results = [];
  fs
    .readdirSync(directory)
    .forEach((fileName) => {
      const file = `${directory}/${fileName}`;
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(readDirectory(file));
      } else {
        results.push(file);
      }
    });
  return results;
}

module.exports = readDirectory;
