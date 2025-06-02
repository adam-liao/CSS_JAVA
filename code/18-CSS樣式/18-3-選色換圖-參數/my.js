document.getElementById("btn1").onclick = function () { aaa("red"); }
document.getElementById("btn2").onclick = function () { aaa("green"); }
// document.getElementById("btn3").onclick = function () { aaa("blue"); }
document.getElementById("btn3").onclick=function(){aaa("blue");}


function aaa(X) {
    document.getElementById("pic").src = "./img/" + X + ".jpg"
    document.getElementById("tt").style.color = X

}




