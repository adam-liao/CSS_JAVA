let ss = document.querySelectorAll("#BOX img")
let bb = document.querySelector("#pic")

ss.forEach((item,index) => { item.onclick = () => { aaa(index) }})

function aaa(N) {
        N = N + 1

        bb.src = "./img/00" + N + ".jpg"
}