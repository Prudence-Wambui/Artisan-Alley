var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

    /*When the icon is clicked on, it will add the sidebar class (small-sidebar), and 
    if the class is already there it removes it */
}


