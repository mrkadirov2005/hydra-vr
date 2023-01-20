const pieSelect = document.getElementById("pie-select")
const navBar = document.getElementById("nav_bar")

pieSelect.addEventListener("click", () => {
  navBar.classList.toggle("sticky-nav")
})

console.log(pieSelect, navBar)
