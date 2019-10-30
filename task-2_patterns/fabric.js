let registeredPartFactories = {};
registeredPartFactories['header'] = class HeaderCard {
    constructor(props) {
        this.header = props.header;
    }
};

registeredPartFactories['bodyLarge'] = class BodyLargeCard {
    constructor(props) {
        this.color = props.color;
    }
};

registeredPartFactories['bodySmall'] = class BodySmallCard {
    constructor(props) {
        this.color = props.color;
    }
};

registeredPartFactories['footer'] = class FooterCard {
    constructor(props) {
        this.footer = props.footer;
    }
};


class CardPartFactory {
    constructor(type, props) {
        return new registeredPartFactories[type](props);
    }
};


let news = {};
let newsProps = {
    header: 'header',
    bodyLarge: 'body large',
    footer: 'footer',
};

alligator.header = new HeaderCard("header", newsProps);
alligator.bodyLarge = new BodyLargeCard("bodyLarge", newsProps);
alligator.footer = new FooterCard("footer", newsProps);
