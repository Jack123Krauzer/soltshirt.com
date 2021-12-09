$(document).ready(function () {

const sectionIdsToObserve = ['home', 'roadmap', 'gallery', 'faqs'];



const navbarObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'roadmap' && window.innerWidth > 1023) {
                startAnim();
            }
            document.querySelectorAll('.navlink').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href')
                    .replace('#', '') === entry.target.id);
            })
        }
    })
}, {
    threshold: 0
})

sectionIdsToObserve.forEach(id => {
    const section = document.querySelector(`#${id}`)
    navbarObserver.observe(section)
})
});