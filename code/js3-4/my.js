
let pic = document.getElementById("pic");
let tt = document.getElementById("tt");
function xxx() {
    tt.innerHTML = "芥末綠"
    pic.src = "./img/g01.jpg"

}
function yyy() {
    pic.src = "./img/g02.jpg"
    tt.innerHTML = "芥末粉"
}

document.getElementById("icon1").onclick = xxx
document.getElementById("icon2").onclick = yyy




// function xxx() {
//     let pic = document.getElementById("pic");
//     document.getElementById("tt").innerHTML = "芥末綠"
//     pic.src = "./img/g01.jpg"

// }
// function yyy() {
//     let pic = document.getElementById("pic");
//     pic.src = "./img/g02.jpg"
//     document.getElementById("tt").innerHTML = "芥末粉"
// }

// document.getElementById("icon1").onclick = xxx
// document.getElementById("icon2").onclick = yyy
