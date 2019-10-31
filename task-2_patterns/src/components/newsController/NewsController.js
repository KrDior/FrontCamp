import Emitter from '../emitter/Emitter';

export default class ChatController {
    constructor() {
        this.interface = new FormInterface();
        this.wsclient = new WSClient();
        this.emt = new Emitter();
        this.storage = new History();
        this.notify = new MessageNotification();
        this.sentMessageFromStorage = this.sentMessageFromStorage.bind(this);
        this.subscribeHandler = this.subscribeHandler.bind(this);
        this.subscribeHandler();
    }

    subscribeHandler() {
        this.emt.subscribe('messageFromServer', this.storage.addToStorage);
        this.emt.subscribe('messageFromServer', this.notify.visibilityStatus);
        this.emt.subscribe('messageFromClient', this.wsclient.sendMessage);
        this.emt.subscribe('localSystemMessage', this.interface.renderMessage);
        this.emt.subscribe('connecting', this.interface.renderMessage);
        this.emt.subscribe('welcom user', this.interface.renderMessage);

        this.emt.subscribe('disconnectedError', this.interface.renderMessage);
        this.emt.subscribe('changing nickname', this.interface.setUserName);
        this.emt.subscribe('changing nickname submit', this.interface.renderMessage);

        this.emt.subscribe('welcom user', this.storage.checkOutgoingMessageStorage);
        this.emt.subscribe('welcom user', this.sentMessageFromStorage);
        this.emt.subscribe('welcom user', this.storage.clearOutgoingMessageStorage);
        this.emt.subscribe('server offline', this.storage.addOutgoingMessageToStorage);

    }

    destroy() {
        this.interface.destroy();
        this.wsclient.destroy();
        this.emt.clearEmit();
        this.storage.clearStorage();
        this.notify.destroy();
        this.messages = null;
    }

    sentMessageFromStorage() {
        this.messages = this.storage.checkOutgoingMessageStorage();
        this.messages.forEach((it) => {
            this.wsclient.sendMessage(it);
        });
    }
}
