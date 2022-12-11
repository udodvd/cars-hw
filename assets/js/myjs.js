document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementById("action-btn").onclick = function () {
    document.getElementById("car").scrollIntoView({behavior: "smooth"})
}
document.getElementById("action-btn").onclick = function () {
    document.getElementById("car").scrollIntoView({behavior: "smooth"})
}
let buttons = document.getElementsByClassName("btn-cars");

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById("contact").scrollIntoView({behavior: "smooth"})
    }
}
 document.getElementById("get-price").onclick = function (){
           if(document.getElementById("name").value == ""){
               document.getElementById("warning-name").innerHTML = "Напишите ваше имя";
           }else if(document.getElementById("tel").value == ""){
               document.getElementById("warning-mail").innerHTML = "Напишите вашу почту";
           }else if(document.getElementById("price").value == ""){
               document.getElementById("warning-auto").innerHTML = "Укажите ваше авто";
           }else {
               document.getElementById("warning-name").innerHTML = "";
               document.getElementById("warning-mail").innerHTML = "";
               document.getElementById("warning-auto").innerHTML = "";
           }
 }
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.call-back-car');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.9) / 5) + 'px,' + ((event.clientY * 0.9) / 5) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.9 * window.pageYOffset) + 'px';
    })
});