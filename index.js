
let clickSound = new Audio("sound/Mouse_click.mp3");
let downloadSound = new Audio("sound/download_sound.mp3");

document.getElementById("resume-button-1").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view?usp=share_link",`_blank`)
    downloadSound.play();
}

document.getElementById("resume-button-2").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1aXEimS1Tyv45SANM9-KKgpjXxlmEOf-d/view?usp=share_link",`_blank`)
    downloadSound.play();
}


let resButton = document.querySelector("#resume-link-2");
resButton.addEventListener("mouseenter", () =>{
    resButton.innerText = "Download";
})
resButton.addEventListener("mouseleave", () =>{
    resButton.innerText = "Resume";
})


var navbar = document.getElementById('nav-menu');

navbar.addEventListener("onload", ()=>{
    navbar.classList.remove('navBG');
})


function changNavBG(){
    var navbar = document.getElementById('nav-menu');
    var scrollValue = window.scrollY;
    // console.log(scrollValue+ " scroll")
    if(scrollValue > 180){
        
        navbar.classList.remove('navBG');
    }else navbar.classList.add('navBG');

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

// get the checkbox element
let checkbox = document.querySelector("#check");

let listItems = document.querySelectorAll("#nav-menu ul li");

// loop through all li elements and add click event listener
listItems.forEach(listItem => {
  listItem.addEventListener("click", () => {
    // uncheck the checkbox
    checkbox.checked = false;
    clickSound.play();
  });
});


// project click button sound

let clickEffect = document.querySelectorAll(".click-sound");

clickEffect.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.play();
    })
})
