/*=========================  一個蘿蔔一個坑 =========================*/
for (let i = 1; i <= 6; i++) {
    document.getElementById("s" + i).onclick = aaa;

}

function aaa() {

    for (let i = 1; i <= 6; i++) {
        if (this.id == "s" + i) { document.getElementById("pic").src = "./img/00" + i + ".jpg"; }

    }
}
