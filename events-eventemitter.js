const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('message', () => {
  console.log('Message event triggered');
});

emitter.emit('message');
