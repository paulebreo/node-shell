// const path = require('path');
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')
process.stdout.write('prompt > ');


const done = (output) => {
  // show the output
  process.stdout.write(output)
  // show the prompt
  process.stdout.write('prompt > ')  
}

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // const writeThis = process.stdout.write;
  if (cmd === 'pwd') {
    pwd()
  } else if (cmd === 'ls') {
    ls(done)
  } else if (cmd.includes('cat')) {
    let fileName = data.toString().trim().split(' ')[1]
    cat(fileName, done)
  } else if (cmd.includes('curl')) {
    let urlStr = data.toString().trim().split(' ')[1]
    process.stdout.write(urlStr)
    // process.stdout.write('url', urlStr)
    curl(urlStr, done)
  } 
  else {process.stdout.write('You typed: ' + cmd)}
  process.stdout.write('\nprompt > ')


})

