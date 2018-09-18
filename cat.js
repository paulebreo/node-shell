

function catInfo (fileName) {
  const fullFilePath = process.cwd() + '/' + fileName;
  process.stdout.write(fullFilePath);
  // fileContents =
  // process.stdout.write(`${process.cwd}${fileContents}`)
}

module.exports = catInfo
