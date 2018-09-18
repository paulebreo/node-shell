const request = require("request");
module.exports = curl = siteName => {
    process.stdout.write(`sitename: ${siteName}`)
    request(siteName, function(error, response, body) {
        if(error) {
            throw error 
        } else {
            let res = response && response.statusCode
            process.stdout.write(`statusCode:${res}`)
            process.stdout.write(`body:${body}`)
            process.stdout.write(`error: ${error}`)
            process.stdout.write('prompt > ')
        }
    });
}