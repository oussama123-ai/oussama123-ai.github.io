let menuIcon = document.getElementsByClassName('hamborger-menu')[0];
let mobileMenu = document.querySelector('.mobile-menu');
menuIcon.addEventListener('click',()=>{
    if(menuIcon.classList.contains('menu-open')){
        menuIcon.classList.remove('menu-open');
        mobileMenu.classList.remove("mobile-menu-active");
    }else{
        menuIcon.classList.add('menu-open');
        mobileMenu.classList.add("mobile-menu-active");
    }
})

//hide the mobile menu when clicking links
let links = mobileMenu.getElementsByTagName('a');
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',()=>{
        mobileMenu.classList.remove("mobile-menu-active");
        menuIcon.classList.remove('menu-open');
    })
}