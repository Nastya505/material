let nav_item = document.querySelectorAll(".nav-item");
function activeLink(){
    nav_item.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}
nav_item.forEach((item) => 
item.addEventListener("click", activeLink));