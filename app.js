const Hapi = require('hapi');
const routes = require('./routes');
const registers = require('./registers');
const database = require('./database');

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 8080 });
server.register(registers, function(err){ if(err) throw err; });
server.route(routes);

server.start(function () {
	console.log('Running at:', server.info.uri);
});
