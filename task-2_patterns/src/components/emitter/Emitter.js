/* eslint-disable no-underscore-dangle */
export default class Emitter {
    constructor() {
        if (Emitter.instance) {
            return Emitter.instance;
        }
        Emitter.instance = this;
        this._events = {};
    }

    on = (evt, listener) => {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }

    unsubscribe = (evt, listener) => {
        this._events[evt] = this._events[evt].filter((lsn) => lsn === listener);
    }

    emit = (evt, arg) => {
        (this._events[evt] || []).slice().forEach((lsn) => lsn(arg));
    }

    clearEmit = () => {
        this._events = {};
    }
}
