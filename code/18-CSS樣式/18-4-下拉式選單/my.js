for (let i = 1; i<= 5; i++) {

    document.getElementById("menu" + i).onmouseover = function () { aaa(i) }
    document.getElementById("menu" + i).onmouseout = function () { bbb(i) }
}

function aaa(i) {
    document.getElementById("submenu" + i).style.display = "block";
}
function bbb(i) {
    document.getElementById("submenu" + i).style.display = "none";
}
