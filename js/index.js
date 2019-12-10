// Your code goes here


// click event
const heading = document.querySelector(".logo-heading")
heading.addEventListener("click", () => {
        heading.style.color = "red";
    })
 
// Double Click event
const intro = document.querySelector(".intro")
intro.addEventListener("dblclick", () => {
    intro.style.color = "purple";
})


// Mouseenter event
const textContent = document.querySelector(".text-content")
textContent.addEventListener("mouseenter", () => {
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

//

//

//

//



