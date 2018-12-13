import socketIOClient from 'socket.io-client';

const socket = socketIOClient.connect('http://192.168.0.117:8383');

export default socket;