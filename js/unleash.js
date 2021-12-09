const toucans = document.querySelectorAll('.unleash-toucan');

toucans.forEach(el => {
    el.style.animationDelay = Math.floor(Math.random() * 2) + Math.random() + 's'
})