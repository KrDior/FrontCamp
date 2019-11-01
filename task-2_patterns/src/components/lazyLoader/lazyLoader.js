export default function lazyLoader() {
    const images = [...document.querySelectorAll('.lazy-image')];

    const config = {
        // root: document.querySelector('#newsContainer'),
        // rootMargin: '0px 0px 200px 0px',
    };

    function onIntersection(imageEntites) {
        imageEntites.forEach((image) => {
            if (image.isIntersecting) {
                // eslint-disable-next-line no-use-before-define
                observer.unobserve(image.target);
                image.target.src = image.target.dataset.src;
                image.target.onload = () => image.target.classList.add('loaded');
            }
        });
    }

    let observer = new IntersectionObserver(onIntersection, config);
    images.forEach((image) => observer.observe(image));
}
