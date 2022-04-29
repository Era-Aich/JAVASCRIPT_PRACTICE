
let count=0;

let photos=["assets/image/1.jpg","assets/image/2.jpg","assets/image/5.jpg","assets/image/7.jpg","assets/image/8.jpg"]

let imgsrc=document.querySelector("img")




function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        imgsrc=photos[count]
    }
    else{
        imgsrc=photos[count]
    }
    
}






function next(){
    count++;
if(count>=photos.length){
    count=0;
    imgsrc=photos[count]
}



else{
    imgsrc=photos[count]

}

}
