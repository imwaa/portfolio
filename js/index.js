/* ======== MENU SHOW & HIDDEN ======== */
const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close"),
    darkBtn = document.getElementById("dark-mode"),
    Sections = document.querySelectorAll("section"),
    _SectionsTitle = document.querySelectorAll("section-title"),
    _SectionsSubTitle = document.querySelectorAll("section-subtitle")


    //SHOW
    toggleMenu.addEventListener("click",()=>{
        navMenu.classList.add('show')
    })

    closeMenu.addEventListener("click",()=>{
        navMenu.classList.remove('show')
    })

    //HIDDEN


/* ======== REMOVE MENU ======== */
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener("click",linkAction))

/* ======== SCROLL SECTIONS ACTIVE LINK ======== */
const sections = document.querySelectorAll("section[id]")

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(".nav__menu a [href*="+ sectionId +"]").classList.add('active')
        }else{
            document.querySelector(".nav__menu a [href*="+ sectionId +"]").classList.remove('active')

        }

    })
}
