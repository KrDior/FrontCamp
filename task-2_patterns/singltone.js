export default class Emitter {
    constructor() {
        if (Emitter.instance) {
            return Emitter.instance;
        }
        Emitter.instance = this;
        this.events = {};
    }

    subscribe(evt, fn) {
        if (!this.events[evt]) {
            this.events[evt] = [];
        }
        this.events[evt].push(fn);
    }

    unsubscribe(evt, fn) {
        this.events[evt] = this.events[evt].filter(it => it === fn);
    }

    emit(evt, data) {
        this.events[evt].forEach((it) => {
            it(data);
        });
    }

    clearEmit() {
        this.events = {};
    }
}
