const imagesWithDelay = document.querySelectorAll('[data-animation-offset]');
imagesWithDelay.forEach(el => {
    el.style.animationDelay = el.dataset.animationOffset + 's';
})