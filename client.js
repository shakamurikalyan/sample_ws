
const { WebSocket } = require('ws');
const webSocket = new WebSocket('ws://localhost:8080/');
webSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
 }