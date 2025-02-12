function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const tickerList = document.querySelector('.ticker-list');
    const clonedList = tickerList.cloneNode(true);
    tickerList.appendChild(clonedList);

    tickerList.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });

    tickerList.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});
