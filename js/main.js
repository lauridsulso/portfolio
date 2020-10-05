//CHANGES SECTION COLOR ON SCROLL

const colors = ['', 'white', 'black']

const sections = [...document.getElementsByTagName('section')]

window.addEventListener('scroll', function () {

    const scrollFromTop = window.pageYOffset - 500

    for (let i = 0; sections.length > i; i++) {

        if (scrollFromTop <= sections[i].offsetTop) {
            document.body.className = colors[i]
            break
        }

    }

})


//FADES HERO SECTION TO BLACK BEFORE CHANGING VIEWPORT TO WHITE

const checkpoint = 200;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".front").style.opacity = opacity;
});



//TRIGGER SKILLS BAR ANIMATION

// get the element to animate
var element = document.getElementById('skills');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', skills);

// check if element is in view
function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function skills() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('html');
    }
}


//HIDE NAVBAR ON SCROLL

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("headerul").style.top = "0";
    } else {
        document.getElementById("headerul").style.top = "10px";
    }
    prevScrollpos = currentScrollPos;
}





//MOBILE NAVIGATION DISPLAY/HIDE
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}