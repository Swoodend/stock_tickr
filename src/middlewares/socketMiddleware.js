import { addStock } from '../actions/actions';
export const socketMiddleware = (socket) => {
    return (store) => (next) => (action) => {
        if(action.type === "ADD_STOCK"){
          socket.emit('add stock', action.payload);
        } else if(action.type === "REMOVE_STOCK"){
            socket.emit('remove stock', action.payload)
        } else {
            next(action);    
        }
    }
}