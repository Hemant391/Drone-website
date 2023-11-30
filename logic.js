burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
righnav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    righnav.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav')
    navlist.classList.toggle('v-class-resp')


})