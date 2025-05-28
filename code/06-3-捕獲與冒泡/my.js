

document.getElementById("grandpa").onmousedown = aaa
document.getElementById("father").onmousedown = bbb
document.getElementById("child").onmousedown = ccc
document.getElementById("bb").onmousedown = ddd


function aaa(e){
    document.getElementById("grandpa").style.backgroundColor = "#f00"
    e.stopPropagation()
}
function bbb(e){
    document.getElementById("father").style.backgroundColor = "#f0f"
    e.stopPropagation()
}
function ccc(e){
    document.getElementById("child").style.backgroundColor = "#ff0"
    e.stopPropagation()
}
function ddd(e){
    document.getElementById("bb").style.backgroundColor = "#00f"
    e.stopPropagation()
}
