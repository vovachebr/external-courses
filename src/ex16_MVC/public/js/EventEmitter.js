export default class EventEmitter {
    constructor() {
        this.listeners = [];
    }

    subscribe(handler) {
        this.listeners.push(handler);
    }

    notify(data) {
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i](data);
        }
    }
}