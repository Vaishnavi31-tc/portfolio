const cursor=document.getElementById("main")


function a(cur)
{
    console.log(cur.x+", "+cur.y)
    cursor.style.top = cur.y+"px"
    cursor.style.left = cur.x+"px"

}

window.addEventListener("mousemove",a);