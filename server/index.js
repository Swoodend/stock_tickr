const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

const MongoClient = require('mongodb').MongoClient;

app.use(express.static(path.join(__dirname, '/../dist')));



const server = app.listen(port, () => {
    console.log('server running on port', port);
});

const io = require('socket.io')(server);


    
MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err){ return console.dir(err); }
    let dbase = db.db('stock_tickr');        
    dbase.createCollection('current_series_state', (err, collection) => {
        if (err){ return console.dir(err); }
        let clients = [];     
        io.on('connection', (socket) => {
            clients.push(socket.id);
            socket.on('update chart state', () => {
                collection.find({}, {name: 1, data: 1,   _id: 0}).toArray((err, result) => {
                    io.sockets.connected[clients[clients.length - 1]].emit('update chart state', result)                
                });
            })

            socket.on('disconnect', () => {
                let clientIndex = clients.findIndex((id) => {
                    return id === socket.id
                });
                clients.splice(clientIndex, 1);

                if (!clients.length){
                    collection.remove({});
                }
            })

            socket.on('add stock', stockObj => {
                collection.find({name: stockObj.name}).toArray((err, result) => {
                    if (err) { return console.dir(err)};
                    if (result.length === 0){
                        collection.insert(stockObj);
                        io.emit('new stock', stockObj);
                    }
                })

            });

            socket.on('remove stock', symbol => {
                collection.remove({name: symbol});
                console.log('removied');
                io.emit('removed stock', symbol);
            });
        
        });
    }); 
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
})

