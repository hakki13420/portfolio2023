// copyright year

const year=document.querySelector('#year')
year.innerHTML=new Date().getFullYear();

//menu clickable
const menu=document.querySelector('.menu-icon')
const nav=document.querySelector('.nav')
const header=document.querySelector('.header')
const closing=document.querySelector('.close')
const home=document.querySelector('.home')
menu.addEventListener('click',()=>{
    //header.style.display="block"
    if([...menu.classList].includes('ri-menu-line')){
        menu.classList.remove('ri-menu-line')
        menu.classList.add('ri-close-fill')
    }else{
        menu.classList.add('ri-menu-line')
        menu.classList.remove('ri-close-fill')
        header.style.display="flex"
        menu.style.display='block'    
        
        
    }
    //menu.style.display='none'
    //closing.style.display='block'
    home.classList.toggle('padding-section')
    nav.classList.toggle('show-nav')
    
})


//toggle active item menu

const sections=document.querySelectorAll('section')
const navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY
        let offset=sec.offsetTop-150
        let height=sec.offsetHeight
        let id=sec.getAttribute('id')
        if(top>=offset && top<height+offset){
            navLinks.forEach(link=>{
                link.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }

    })

    //sticky effect when scrolling
    header.classList.toggle('sticky',window.scrollY>100)

    //closing menu when scrolling
    if([...nav.classList].includes('show-nav')){
        nav.classList.remove('show-nav')
        menu.classList.add('ri-menu-line')
        menu.classList.remove('ri-close-fill')
        home.classList.remove('padding-section')
    }
    
}


//animation when scrolling with reveal js 

ScrollReveal({ 
    reset: true,
    distance:'100px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home__left,.heading', { origin: 'top' });
 ScrollReveal().reveal('.home__right,.contact-form,.about__container,.knowldges__container,.projects__container ', { origin: 'bottom' });
 ScrollReveal().reveal('.name,.about__left', { origin: 'left' });
 ScrollReveal().reveal('.description', { origin: 'right' });


 //scroll to top
const goToTop=document.querySelector('.go-top')
goToTop.onclick=()=>{
    window.scrollTo(0,0)
}


//typed js 
var typed = new Typed('#element', {
    strings: ['FullStack', 'Frontend', 'Wordpress'],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay:1000,
    loop:true,
  });