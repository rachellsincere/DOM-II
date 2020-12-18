// Your code goes here


// Mouseover event
const heading = document.querySelector(".logo-heading")
heading.addEventListener("mouseover", () => {
        heading.innerHTML = "YOOOO";
    })

// Mouseleave event
heading.addEventListener("mouseleave", (e) => {
    heading.innerHTML = "Fun Bus";
    
})
 
// Double Click event
const intro = document.querySelector(".intro")
intro.addEventListener("dblclick", () => {
    intro.style.color = "purple";
   
})


// Mouseenter event
const textContent = document.querySelector(".text-content")
textContent.addEventListener("mouseenter", (e) => {
    e.stopPropagation();
    textContent.style.color = "orange";

})

// Mouseout event
textContent.addEventListener("mouseout", () => {
    textContent.style.color = "black";
})

// Resize window event
const images = document.querySelector("img")
window.addEventListener("resize", () => {
    images.style.display = "none";

})

// Load window event
window.addEventListener("load", () => {
    alert("click and hover and see what you discover!");
})

// Click event
const navLinks = document.querySelector("a")
navLinks.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.style.color = "red";
})


// Scroll event
const body = document.querySelector(".container")
window.addEventListener("scroll", () => {
    body.style.background = "lavender";
})

// Mouse move event
const footer = document.querySelector(".footer")
footer.addEventListener("mousemove", () => {
    footer.style.background = "purple";
})



