



document.querySelector(".myclass").addEventListener("click",message);


function message(e){
    let val=e

    val=e.target
    val=e.target.id

    val=e.clientY;
    val=e.clientX;

    console.log(val)
}


document.querySelector(".container").addEventListener("mouseover",add)
document.querySelector(".container").style.background="red"
function add(e){

    let value=e
value=e.target
    value.style.background=`#${e.offsetX}`


    console.log(value)
}
