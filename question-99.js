// Write an EventEmitter class that allows subscribing to
// events, emitting events, and unsubscribing from events.
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

const emitter = new EventEmitter();
const log = (msg) => console.log(msg);

emitter.on('message', log);
emitter.emit('message', 'Hello World'); // "Hello World"
emitter.off('message', log);
emitter.emit('message', 'Hello again'); // No output
