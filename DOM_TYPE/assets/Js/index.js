let val;
val=document.getElementById("head");

val.style.marginLeft="400px";

val.style.background="blue";


document.write(val)


let id=document.querySelector('ol li:nth-child(2)')

id.style.background="green"


document.write(id)


let url=document.querySelectorAll('ul li:nth-child(even)');

url.forEach(function(item){
    item.style.background="grey";

});


document.write(url)

let it=document.querySelector('ul');
it.appendChild(document.createTextNode("javascript"));


document.querySelector('ul').appendChild(it);
console.log(it);


let it1=document.querySelector('ol');
it1.appendChild(document.createTextNode("javascript"));


document.querySelector('ul').appendChild(it1);
console.log(it1);



let ulItem=document.createElement('li')



let link=document.createElement('a');


console.log(ulItem)
console.log(link)