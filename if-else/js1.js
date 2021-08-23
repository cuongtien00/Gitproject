
function yesClick() {
    alert("I <3 U");
}
function noClick() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    let click = document.getElementById("no");
    click.style.left = Math.round(x*Math.random()) + "px";
    click.style.top = Math.round(y*Math.random()) + "px";

}