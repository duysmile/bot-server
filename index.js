import config from './server/config';
import Socket from 'socket.io';
import App from './server/config/express';

const PORT = config.port || 9000;
var http = require('http').Server(App);
const io = Socket(http);

const command = io.of('api/command').on('connection', function (socket) {
    console.log("ok");
    socket.on('command', function (message) {
        console.log(message);
        socket.broadcast.emit('message', message);
    })
    socket.on('disconnect', function () {
        console.log('disconnect');
    })
})

http.listen(config.port, () => {
    console.log(`App listening on port ${PORT}!`);
});
