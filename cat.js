const fs = require('fs');

function catInfo (fileName) {

  const fullFilePath = process.cwd() + '/' + fileName;

  fs.readFile(fullFilePath, (err, data) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(data)
    }
    
  });

  // process.stdout.write(stream);


}

module.exports = catInfo
