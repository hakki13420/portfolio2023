// copyright year

const year=document.querySelector('#year')
year.innerHTML=new Date().getFullYear();

//menu clickable
const menu=document.querySelector('.menu-icon')
const nav=document.querySelector('.nav')
const header=document.querySelector('.header')
const closing=document.querySelector('.close')
menu.addEventListener('click',()=>{
    nav.classList.toggle('show-nav')
    header.style.display="block"
    menu.style.display='none'
    closing.style.display='block'
})

closing.addEventListener('click', function(){
    header.style.display="flex"
    menu.style.display='block'    
    nav.classList.remove('show-nav')
    nav.style.display='none!important'
    closing.style.display='none'

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
}
