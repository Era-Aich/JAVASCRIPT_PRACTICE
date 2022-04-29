let newele= document.createElement("h4");
newele.appendChild(document.createTextNode("Hi i am ERA"));

let oldele= document.querySelector('h1')

let parent=document.querySelector('.container')
parent.replaceChild(newele,oldele)

console.log(parent);



let listitem= document.querySelectorAll("ul li");
listitem[1].remove()
console.log(listitem)