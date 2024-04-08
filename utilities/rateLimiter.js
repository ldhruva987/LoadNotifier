const rateLimit = require('express-rate-limit');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));

const limiter = rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.maxRequestsPerWindow,
    message: config.errorMessage
});
module.exports =limiter;