var menu = document.querySelector('.topNav');
var submenu = document.querySelector('.submenu');
menu.addEventListener("mouseover", function(event) {
    var target = event.target;
    while (target != this && target.className != "hassubmenu") {
        target = target.parentElement;
    }
    if (target == this) return;
    var submenu = target.querySelector('.submenu');
    submenu.parentElement.style.color = "white";
    submenu.style.display = 'block';
})

var hassubmenu = document.querySelectorAll(".hassubmenu");
for (var i = 0; i < hassubmenu.length; i++) {
    hassubmenu[i].addEventListener("mouseleave", function(event) {
        var target = event.target;
        var submenu = target.querySelector('.submenu');
        submenu.parentElement.style.color = "black";
        submenu.style.display = 'none';
    })
}
