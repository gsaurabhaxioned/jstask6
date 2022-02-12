const content_box = document.querySelectorAll('.content');

function loadOnScroll() {
    for (let i = 0; i < content_box.length; i++) {
        if (content_box[i].offsetTop < window.scrollY + (window.screen.height / 1.5)) {
            content_box[i].style.transform = "translateX(0)";
        }
    }
}
window.onload = loadOnScroll;
window.onscroll = loadOnScroll;