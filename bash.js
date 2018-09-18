// const path = require('path');
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // const writeThis = process.stdout.write;
  if (cmd === 'pwd') {
    pwd()
  } else if (cmd === 'ls') {
    ls()
  } else if (cmd.includes('cat')) {
    let fileName = data.toString().trim().split(' ')[1]
    cat(fileName)
  }
  else {process.stdout.write('You typed: ' + cmd)}
  process.stdout.write('\nprompt > ')


})

