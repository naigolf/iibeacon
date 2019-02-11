export default {
    // MQTT servers websocket connection
    port: 34549,
    host: 'm15.cloudmqtt.com',
    username: 'czpxynah',
    password: '5wdKnv7HUR1U',
    clientId: 'ESP32Client' + Math.random().toString(16).substr(2, 8),
    channel: '/beacons/office'
};
