let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    body.classList.toggle("lock")
})

window.addEventListener("scroll", function(){
    if(scrollY >= 160) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})

let arrow = document.querySelector(".arrow")


window.addEventListener("scroll", function(){
    if (scrollY >= 200) {
        arrow.classList.add("arrow__visible")
    } else {
        arrow.classList.remove("arrow__visible")
    }
})

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})