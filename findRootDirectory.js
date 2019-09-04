const fs = require('fs');
const path = require('path');

const findRootDirectory = () => {
  // Start in the dir where this module is installed
  let dirPath = process.cwd();

  // Look for the .koji dir
  try {
    while (!fs.readdirSync(dirPath).includes('.koji')) {
      const parentPath = path.dirname(dirPath);
      if (dirPath === parentPath) throw Error('[@withkoji/vcc] Couldn\'t find ".koji" folder.');
      dirPath = parentPath;
    }
  } catch (err) {
    // Fallback to using the default path?
    dirPath = process.cwd();
    console.log(`[@withkoji/vcc] Couldn't find ".koji" folder. Default path was used: "${dirPath}"`);
  }
    
  return dirPath;
};

module.exports = findRootDirectory;
