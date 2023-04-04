// let resButton = document.getElementById("resume-button-2");
// resButton.addEventListener("click", ()=>{
//     window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view?usp=share_link", "_blank");
// })


// function resume() {
    // var win = window.open('Akash_Chauhan_Resume.pdf', '_blank');
    // var win = window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view?usp=share_link", "_blank");
    // win.focus();
// }


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



// new code
let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    m.style.marginTop="200px";
    count++;
    if(count%2==0){
        m.style.marginTop="0px";

    }

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.getElementById("resume-button-1").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view",`_blank`)
  }
  
  document.getElementById("resume-button-2").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view",`_blank`)
  }