var mouse_event="empty";

var lpox,lpoy;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var color="black";

width_of_line=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_event="mouseDown";
}


canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseLeave";
}


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseUp";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpox=e.clientX=canvas.offsetLeft;
    cpoy=e.clientY=canvas.offsetTop;

    if (mouse_event=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x="+ lpox +"y="+lpoy);
        ctx.moveTo(lpox,lpoy);

        console.log("Current position of x and y coordinates = ");
        console.log("x="+ cpox +"y="+cpoy);
        ctx.lineTo(cpox,cpoy);
        ctx.stroke();
    }

    lpox=cpox;
    lpoy=cpoy;

}