let current = 0;
let target = 0;
let ease = 0.1;

let windowWidth, containerHeight, imageHeight;

let container = document.querySelector('#smooth-scroll-wrapper');

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function setupAnimation() {
    windowWidth = window.innerWidth;
    containerHeight = container.getBoundingClientRect().height;
    document.body.style.height = `${containerHeight}px`;
    smoothScroll()
}

function smoothScroll() {
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY
    skewDiff = (target - current) * .0
    setTransform(container, `translateY(${-current}px) skewY(${skewDiff}deg) `);
    requestAnimationFrame(smoothScroll)
}

setupAnimation()