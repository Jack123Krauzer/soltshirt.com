faqTogglers.forEach(el => el.addEventListener('click', () => {
    el.parentNode.parentNode.classList.toggle('opened');
}))
