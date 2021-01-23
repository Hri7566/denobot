import { Client } from "./Client.ts";

var client = new Client("wss://www.multiplayerpiano.com:443");

client.start();
client.setChannel("✧𝓡𝓟 𝓡𝓸𝓸𝓶✧");

client.on('hi', () => {
    console.log(`Online!`);
});

// let i = 0;

// setInterval(() => {
//     i++;
//     console.log(`${i}: `+client.ws.readyState);
// }, 1);

client.ws.onerror = err => {
    console.error(err);
}
