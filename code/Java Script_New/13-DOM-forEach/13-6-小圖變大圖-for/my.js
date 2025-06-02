let ss = document.querySelectorAll("#BOX img")
let bb = document.querySelector("#pic")

for (let i = 0; i < ss.length; i++) {

    ss[i].onclick = function () { aaa(i); }
}

function aaa(N) { 
    N = N + 1
    bb.src = "./img/00" + N + ".jpg"
}