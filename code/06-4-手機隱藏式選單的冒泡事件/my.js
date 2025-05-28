document.getElementById("icon").onclick = show;
document.body.onclick = hide;







function show(e) {
    document.getElementById("menu").style.display = "block"
    e.stopPropagation()

}
function hide() {
    document.getElementById("menu").style.display = "none"
}




