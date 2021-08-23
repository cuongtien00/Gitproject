function init() {
    let a =document.getElementById("table");
    a.style.position ="relative";
    a.style.left ="600px";
    a.style.top ="100px";
}
function sohang(e) {
    let sohang = e.getAttribute("value");
    document.getElementById("nhap").value += sohang;
}
function tinhtoan() {
    nhap = document.getElementById("nhap").value;
    document.getElementById("nhap").value = eval(nhap);
}
