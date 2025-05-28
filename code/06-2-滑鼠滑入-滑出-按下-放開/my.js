let pic = document.getElementById("pic")
let n=0

pic.onmouseover = aaa;
pic.onmouseout = bbb;
pic.onmousedown = ccc;
pic.onmouseup = aaa;
function aaa() {
    this.src = "./img/p2.png"

}
function bbb() {
    this.src ="./img/p1.png"
}
function ccc() {
    this.src = "./img/p3.png"
    n = n + 1
    document.getElementById('tt').innerHTML = n
}
