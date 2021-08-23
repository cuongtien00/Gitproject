function init() {
    let a =document.getElementById("table");
    a.style.position ="relative";
    a.style.left ="600px";
    a.style.top ="100px";
}
function sohang(e) {
    let sohang = e.getAttribute("value");
 // let result=0;
// switch (sohang) {
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//     case "9":
//     case "0":
//         result = sohang;
//     break;
//
// }
    document.getElementById("nhap").value += sohang;
}
function tinhtoan() {
    nhap = document.getElementById("nhap").value;
    document.getElementById("nhap").value = eval(nhap);
}
function clear() {
  xoa = document.getElementById("nhap").innerHTML;
   
}