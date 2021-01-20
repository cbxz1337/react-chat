import io from 'socket.io-client'
const socket = io('http://192.168.31.186:80', {transports: ['websocket','io', 'polling', 'flashsocket']})
export {socket}