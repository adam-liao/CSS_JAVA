function aaa(a, b) {
    document.getElementById("pic").src = "./img/g0" + a + ".jpg"
    document.getElementById("tt").innerHTML = b

}


document.getElementById("icon1").onclick = function () { aaa(1, "Green") }
document.getElementById("icon2").onclick = function () { aaa(2, "pink") }
    