let btn=document.getElementById("btn")
btn.addEventListener("click",add)



function add(){
    // console.log("clicked")

    let xhr= new XMLHttpRequest()

    xhr.open('GET','index.txt',true)

    xhr.onload=function(){
        if(this.status==200){
            console.log(this.responseText)
        }
    }

    xhr.send();
}