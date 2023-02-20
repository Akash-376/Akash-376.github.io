var navbar = document.getElementById('nav-menu');
navbar.classList.remove('navBG');

function changNavBG(){
    var navbar = document.getElementById('nav-menu');
    var scrollValue = window.scrollY;
    console.log(scrollValue+ " scroll")
    if(scrollValue > 150){
        navbar.classList.add('navBG');
    }else navbar.classList.remove('navBG');

}

window.addEventListener('scroll',changNavBG);



const li = document.querySelectorAll('.nav-link');
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(itx => itx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

