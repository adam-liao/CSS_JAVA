
let N = 1;
let cake = document.getElementById('cake');
cake.onclick = aaa;

setInterval(aaa, 1000);

function aaa() {
    N = N + 1
    cake.src="./img/photo" + N + ".jpg"
    if (N >=6) {
        N = 1;
    }

}