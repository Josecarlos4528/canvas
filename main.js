var mouseEvent="empty";
var ultimaposicionx, ultimaposiciony;
canvas=document.getElementById('micanvas');
ctx=canvas.getContext("2d");
color="black";
anchodelinea=1;
canvas.addEventListener("mousedown", mimousedown);
function mimousedown(e){
    color=document.getElementById("color").value;
    anchodelinea=document.getElementById("anchodelinea").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", mimouseup);
function mimouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", mimouseleave);
function mimouseleave(e){
    mouseEvent="mouseLeave"
}
function limpiar(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
canvas.addEventListener("mousemove", mimousemove);
function mimousemove(e){
    actualposicionx=e.clientX-canvas.offsetLeft;
    actualposiciony=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=anchodelinea;
        console.log("ultima posicion de x y de y= ");
        console.log("x="+ultimaposicionx+"y="+ultimaposiciony);
        ctx.moveTo(ultimaposicionx, ultimaposiciony);
        console.log("actualposiciondex y de y");
        console.log("x="+actualposicionx+"y="+actualposiciony);
        ctx.lineTo(actualposicionx, actualposiciony);
        ctx.stroke();
    }
    ultimaposicionx=actualposicionx;
    ultimaposiciony=actualposiciony;
}