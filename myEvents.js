var events = require('events');
var eventEmitter = new events.EventEmitter();

// Event handler
var myEventHandler = () => {
	console.log('I hear a scream');
}

// Set event handler to an event
eventEmitter.on('scream', myEventHandler);

// Fire the event
eventEmitter.emit('scream');
