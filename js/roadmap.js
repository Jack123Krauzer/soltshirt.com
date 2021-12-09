$(document).ready(function () {
const roadmapItemsToObserve = [...Array(9).keys()].map(i => `#roadmap-item-${i + 1}`)
const roadmapItemsContainer = document.querySelector('.roadmap-items');

const roadmapObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.roadmap-dot').forEach(link => {
                link.classList.toggle('active', link.dataset.roadmapId === entry.target.id)
            })
        }
    })
}, {
    threshold: 0.5,
    root: document.querySelector('#roadmap-obs')
})

document.querySelectorAll('.roadmap-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        roadmapItemsContainer.scrollTo({
            left: document.querySelector(`#${dot.dataset.roadmapId}`).offsetLeft,
            top: 0,
            behavior: 'smooth'
        })
    })
})


roadmapItemsToObserve.forEach(id => {
    const section = document.querySelector(id)
    roadmapObserver.observe(section)
})

const roadmapItemsIdsInOrder = ['1', '2', '3', '6', '5', '4', '7', '8', '9']
let isAnimPlayed = false;
const startAnim = () => {
    if (isAnimPlayed) {
        return
    }
    isAnimPlayed = true
    roadmapItemsIdsInOrder.forEach((id, i) => {
        const el = document.querySelector(`#roadmap-item-${id}`);
        el.style.zIndex = `${i}`;
        setTimeout(() => {
            el.classList.add('opened')
        }, i * 750)
    })
}
});