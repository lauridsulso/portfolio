const checkpoint = 600;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".front").style.opacity = opacity;
});

const checkpoint = 600;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0 - currentScroll / checkpoint;
    } else {
        opacity = 1;
    }
    document.querySelector(".front2").style.opacity = opacity;
});