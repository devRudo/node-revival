const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data received: name ${name} and age ${age}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'vijay', 29)