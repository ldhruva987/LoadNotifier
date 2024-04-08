const fs = require('fs');
 
 // It will track  active connections per IP
const config = JSON.parse(fs.readFileSync('config.json'));
const map = new Map();

const concurrentLimiter = (req, res, next) => {
  const ip = req.ip;
  const connections = map.get(ip) || 0;
  console.log(`${ip}, ${connections}`);
 //checking the rule
  if (connections >= config.maxConcurrentRequests) {
    return res.status(429).send({ message: "Too many concurrent requests from this IP" });
  }

  map.set(ip, connections + 1);
  //connection ends , decrease connection by 1

  req.on('end', () => {
    map.set(ip, Math.max(connections - 1, 0));
  });

  next();
};

module.exports = concurrentLimiter;