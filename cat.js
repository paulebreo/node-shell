const fs = require('fs');

function catInfo (fileName, done) {

  const fullFilePath = process.cwd() + '/' + fileName;

  fs.readFile(fullFilePath, (err, data) => {
    if(err) {
      done('Something went wrong')
      throw err
    } else {
      done(data)
    }
    
  });

  // process.stdout.write(stream);


}

module.exports = catInfo
