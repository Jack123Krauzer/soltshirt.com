function startAnimation() {
    const o1 = document.querySelector('.order-1');
    const o2 = document.querySelector('.order-2');
    const o3 = document.querySelector('.order-3');
    const o4 = document.querySelector('.order-4');
    const o5 = document.querySelector('.order-5');
    const o6 = document.querySelector('.order-6');

    o1.classList.remove('order-1');
    o1.classList.add('order-2');
    o2.classList.remove('order-2');
    o2.classList.add('order-3');
    o3.classList.remove('order-3');
    o3.classList.add('order-4');
    o4.classList.remove('order-4');
    o4.classList.add('order-5');
    o5.classList.remove('order-5');
    o5.classList.add('order-6');
    o6.classList.remove('order-6');
    o6.classList.add('order-7');

    const o7 = document.querySelector('.order-7');
    const newO7 = document.createElement('div');
    newO7.className = o7.className;

    setTimeout(() => {
        o7.remove();
    }, 700)
    newO7.classList.remove('order-7');
    newO7.classList.add('order-1');
    headerImages.append(newO7);

}
setTimeout(() => {
    startAnimation();
    setInterval(() => startAnimation(), 2500)
}, 1000)
