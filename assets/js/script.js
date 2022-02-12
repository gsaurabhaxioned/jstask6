const content_box = document.querySelectorAll('.content');

for (let i = 0; i < content_box.length; i++) {
    if (content_box[i].offsetTop < window.scrollY + (window.screen.height / 1.5)) {
        content_box[i].style.transform = "translateX(0)";
    }

}
window.onscroll = function () {
    for (let i = 0; i < content_box.length; i++) {
        if (content_box[i].offsetTop < window.scrollY + (window.screen.height / 1.5)) {
            content_box[i].style.transform = "translateX(0)";
        }
    }

}