document.getElementById("icon1").onclick = aaa;
document.getElementById("icon2").onclick = bbb;

function aaa() {

    document.body.style.cssText = "background-image: url(./img/bg2.png);"
    document.getElementById("photo").src = "./img/photo2.jpg"

    for (let i = 1; i <= 6; i++) {
        document.getElementById("box" + i).className = "xxx"

    }

}

function bbb() {

    document.body.style.cssText = "background-image: url(./img/bg1.png);"
    document.getElementById("photo").src = "./img/photo1.jpg"

    for (let i = 1; i <= 6; i++) {
        document.getElementById("box" + i).classList.remove("box")
    }
}