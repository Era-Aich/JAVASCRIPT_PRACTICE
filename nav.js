




let v= document.querySelector(".container")
v.addEventListener("mouseover",add)







function add(e){
    let value =e
    value=e.target;
    value.style.background=`#${e.offsetX}`

    console.log(value)

}


let form=document.querySelector(".container_2 form")
let name=document.querySelector("div #name")
let password=document.querySelector("div #password")

let email=document.querySelector("div #email")


form.addEventListener("submit",mes)

function mes(e){
   

    const userInfo={
name:name.value,
email:email.value,
password:password.value,
    };
    console.log(userInfo)

    name.value="";
    email.value="";
    password.value="";

}