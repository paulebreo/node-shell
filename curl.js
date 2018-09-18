const request = require("request");
module.exports = curl = (siteName, done) => {
    process.stdout.write(`sitename: ${siteName}`)
    request(siteName, function(error, response, body) {
        if(error) {
            done('There was an error')
            throw error 
        } else {
            let res = response && response.statusCode
            done(`statusCode:${res}`)
            done(`body:${body}`)
            done(`error: ${error}`)
        }
    });
}