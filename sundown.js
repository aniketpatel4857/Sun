// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page5() {
    var page = document.querySelector(".home")
    var fixed = document.querySelector("#fixed")

    page.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    page.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })

    })
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function design() {

    var design = document.querySelectorAll(".design")
    var right = document.querySelector("#right-1")

    design.forEach(function (e) {
        e.addEventListener("mouseenter", (el) => {
            e.style.color = "white"
            var image = e.getAttribute("data-image")
            right.style.backgroundImage = `url(${image})`
            console.log(el.target.childNodes[1])
            var hjjhk = el.target.childNodes[1]

            hjjhk.style.backgroundColor = "red"

        })
        e.addEventListener("mouseleave", (e) => {
            e.target.style.color = "#333"
            console.log(e.target.childNodes[1])
            var hjjhk = e.target.childNodes[1]
            hjjhk.style.backgroundColor = "gray"

        })
    })
}
function dom (){
    var swiperrr = document.querySelector("#swiperrr")
var wrapper = document.querySelector(".swiper-wrapper")

wrapper.addEventListener("mouseenter", function () {
    swiperrr.style.display = "flex"
})
wrapper.addEventListener("mouseleave", function () {
    swiperrr.style.display = "none"
})
wrapper.addEventListener("mousemove", function (dets) {
      swiperrr.style.left = dets.x +"px"
      swiperrr.style.top = dets.y +"px"
})
}


function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
swiper()
page5()
design()
dom()
menuAnimation()
loaderAnimation()

