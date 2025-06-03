document.getElementById("btn").onclick = aaa;
document.getElementById("close").onclick = bbb;

function aaa() {
    document.getElementById("menu").style.display = "block";
}

function bbb() {
    document.getElementById("menu").style.display = "display:block;";

}

function bbb() {
    document.getElementById("menu").style.cssText = "display:none;";

}

window.onresize = ccc;

function ccc() {
    var w = window.innerWidth;
    if (w > 768) {
        document.getElementById("menu").style.cssText = "display:block;";
    } else {
        document.getElementById("menu").style.cssText = "display:none;";
    }
}