// const path = require('path');
const pwd = require('./pwd')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // const writeThis = process.stdout.write;
  if (cmd === 'pwd') {
    pwd()
  }
  else {process.stdout.write('You typed: ' + cmd)}
  process.stdout.write('\nprompt > ')

 
})

