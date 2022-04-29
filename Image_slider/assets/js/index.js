let photos=["assets/image/1.jpg","assets/image/2.jpg","assets/image/5.jpg","assets/image/6.jpg"]

let photosrc=document.querySelector("img")

let qs=document.querySelector("h1")
qs.addEventListener("mouseover",function(){
qs.classList.add("mystyle")

});

qs.addEventListener("mouseout",function(){
qs.classList.remove("mystyle")

});



let count=0;

function pre(){
count--;
if(count<0){
count=photos.length-1;
    photosrc.src=photos[count]
}
else{
    photosrc.src=photos[count];
}
}


function next(){

count++;
if(count>=photos.length){
    count=0;
    photosrc.src=photos[count];

}
else{
photosrc.src=photos[count]
}
}