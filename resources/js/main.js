let deviceWidth = window.matchMedia("(max-width: 1024px)");

function setSidebarHeight() {
    if (deviceWidth.matches) {
        document.getElementById("sidebar").style.height = window.innerHeight + "px"
    }
}

window.addEventListener("load", setSidebarHeight);
window.addEventListener("resize", setSidebarHeight);