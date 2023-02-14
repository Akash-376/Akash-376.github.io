var navbar = document.getElementById('nav-menu');
navbar.classList.remove('navBG');

function changNavBG(){
    var navbar = document.getElementById('nav-menu');
    var scrollValue = window.scrollY;
    if(scrollValue > 70){
        navbar.classList.add('navBG');
    }else navbar.classList.remove('navBG'); 
}

window.addEventListener('scroll',changNavBG);