import socketIOClient from 'socket.io-client';

const socket = socketIOClient.connect('https://chatter-sample-server.herokuapp.com/');

export default socket;