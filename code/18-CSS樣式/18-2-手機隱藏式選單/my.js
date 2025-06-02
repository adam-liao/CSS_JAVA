document.getElementById("icon").onclick= function () { show("block"); }
document.getElementById("close").onclick = function () { show("none"); }

function show(x) {
    document.getElementById("menu").style.display = x;
    
}

// function hide() {
//     document.getElementById("menu").style.display = "none";

// }