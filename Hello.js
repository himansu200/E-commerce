window.onload = function () {
const bar1=document.getElementById("bar");
const close1=document.getElementById("close");
const nav=document.getElementById("navbar");

if (bar1) {
    bar1.addEventListener('click', () =>
     {
        nav.classList.add('active');
     })
}
if (close1) {
    close1.addEventListener('click', () =>
     {
        nav.classList.remove('active');
     })
}
}