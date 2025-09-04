const header=document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY>0);
});

let menu=document.querySelector('#menuoption');
let navBar=document.querySelector('.navBar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('open');
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navBar.classList.remove('open');
};

const sr=ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
});
sr.reveal('.hometext',{delay:200,origin:'top'});
sr.reveal('.homeimg',{delay:300,origin:'top'});
sr.reveal('.features,.product,.ctacontent,.contact',{delay:200,origin:'left'});

