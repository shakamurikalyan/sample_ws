
const { WebSocket } = require('ws');
const webSocket = new WebSocket('ws://a3b884ff85fd34a15bd028f4c1b7696b-318063447.ap-south-1.elb.amazonaws.com:8080/');
webSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
 }