function cong() {
    let num1=document.getElementById("num1").value;
    num1 =parseInt(num1);
    let num2=document.getElementById("num2").value;
    num2 =parseInt(num2);
    let result =num1+num2;
    document.getElementById("result").innerText = result;

}function tru() {
    let num1=document.getElementById("num1").value;
    num1 =parseInt(num1);
    let num2=document.getElementById("num2").value;
    num2 =parseInt(num2);
    let result =num1-num2;
    document.getElementById("result").innerText = result;

}function nhan() {
    let num1=document.getElementById("num1").value;
    num1 =parseInt(num1);
    let num2=document.getElementById("num2").value;
    num2 =parseInt(num2);
    let result =num1*num2;
    document.getElementById("result").innerText = result;

}function chia() {
    let num1=document.getElementById("num1").value;
    num1 =parseInt(num1);
    let num2=document.getElementById("num2").value;
    num2 =parseInt(num2);
    let result =num1/num2;
    document.getElementById("result").innerText = result;

}