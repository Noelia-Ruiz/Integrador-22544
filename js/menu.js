const toggleButton = document.getElementById("toggleButton");
const nav = document.querySelector("nav");

toggleButton.addEventListener("click", event => {
    //console.log("Hola mundo")
    //console.log(toggleButton)
    console.log(nav)

    nav.classList.toggle("active")
    toggleButton.classList.toggle("active")

})