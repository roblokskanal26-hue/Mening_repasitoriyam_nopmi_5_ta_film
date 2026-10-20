const fs = require('fs');
function logger(req, res, next) {
    const log = `${new Date().toISOString()} ${req.method} ${req.originalUrl}\n`;
    console.log(log);
    fs.appendFileSync('server.txt', log);
    next();
}
module.exports = logger;
