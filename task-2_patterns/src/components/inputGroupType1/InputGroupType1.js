export default class InputGroupType1 {
    constructor(placeholder, modal, buttonName, buttonId, inputId) {
        this.buttonName = buttonName || 'Button';
        this.placeholder = placeholder || '';
        this.modal = modal || false;
        this.buttonId = buttonId;
        this.inputId = inputId;
        this.createElem();
    }

    createElem = () => {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('input-group', 'mb-3');

        this.input = document.createElement('input');
        this.input.classList.add('form-control');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', this.placeholder);
        this.input.setAttribute('aria-label', this.placeholder);
        this.input.setAttribute('aria-describedby', this.buttonId);
        this.input.id = this.inputId;

        this.inputGroup = document.createElement('div');
        this.inputGroup.classList.add('input-group-append');

        this.button = document.createElement('button');
        this.button.classList.add('btn', 'btn-outline-secondary');
        this.button.innerHTML = this.buttonName;
        this.button.id = this.buttonId;
        if (this.modal) this.button.setAttribute('data-dismiss', 'modal');

        this.inputGroup.appendChild(this.button);
        this.wrapper.appendChild(this.input);
        this.wrapper.appendChild(this.inputGroup);
    }

    getElem = () => this.wrapper;
}
