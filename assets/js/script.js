const content_box = document.querySelectorAll('.content'),
    window_height = window.screen.height;

window.onscroll= function(){
    for(let i=0;i<content_box.length;i++){
    if(content_box[i].offsetTop < window_height){
        content_box[i].style.transform="translateX(0)";
    }
}

}