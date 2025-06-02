document.getElementById("iconL").onclick = function (e) {
    aaa(30);
    e.preventDefault();
}

document.getElementById("iconM").onclick = function (e) {
        aaa(16);
    e.preventDefault();
}
document.getElementById("iconS").onclick = function (e){
        aaa(12);
        e.preventDefault();

}


function aaa(N) {
    document.getElementById("tt").style.fontSize = N + "px"
}
