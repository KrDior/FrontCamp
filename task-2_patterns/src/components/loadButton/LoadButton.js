export default class LoadButton {
    constructor(type, text, id, modal, loading) {
        this.type = type || 'primary';
        this.text = text || 'Button';
        this.modal = modal || false;
        this.loading = loading || false;
        this.id = id;
        this.createElem();

        if (this.loading) this.addSpinnerPart();
    }

    createElem = () => {
        this.button = document.createElement('button');
        this.button.classList.add('btn');
        if (this.id) this.button.id = this.id;

        switch (this.type) {
        case 'primary':
            this.button.classList.add('btn-primary');
            break;
        case 'secondary':
            this.button.classList.add('btn-secondary');
            break;
        case 'success':
            this.button.classList.add('btn-success');
            break;
        case 'warning':
            this.button.classList.add('btn-warning');
            break;
        default:
            this.button.classList.add('btn-secondary');
            break;
        }

        if (this.modal) this.button.setAttribute('data-dismiss', 'modal');
        this.button.innerHTML = this.text;
    }

    addSpinnerPart = () => {
        // this.button.setAttribute('disabled');

        this.spanFirst = document.createElement('span');
        this.spanFirst.classList.add('spinner-grow', 'spinner-grow-sm');
        this.spanFirst.setAttribute('role', 'status');
        this.spanFirst.setAttribute('aria-hidden', 'true');

        this.spanSecond = document.createElement('span');
        this.spanSecond.classList.add('sr-only');
        this.spanSecond.innerText = 'Loading...';

        this.button.appendChild(this.spanFirst);
        this.button.appendChild(this.spanSecond);
    }

    getElem = () => this.button;
}
