import socketIOClient from 'socket.io-client';

const socket = socketIOClient.connect('http://localhost:8383');

export default socket;