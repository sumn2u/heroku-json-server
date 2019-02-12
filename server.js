const jsonServer = require('json-server');
const server = jsonServer.create();
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/api/*": "/$1",
    "/me": "/users/1",
    "/me/points": "/points/1",
    "/me/rewards": "/reedems",
    "/rewards_options": "/rewards",
    "/survey":"/surveys/1"
}))
const router = jsonServer.router('app.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;
console.info("server running in port", port)
server.use(middlewares);
server.use(router);

server.listen(port);
