const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
})


const server = app.listen(port, () => {
    console.log('server running on port', port);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(socket.id, 'connected');

    socket.on('disconnect', () => {
        console.log(socket.id, 'disconnected');
    })
});

