let promise1=new Promise((resolve,reject)=>{

    let completepromise=true;

    if(completepromise){
      resolve("Project1 completed")
        }
        else{
            reject("Project not completed")
        }
    
});

promise1.then(res=>{
    console.log(res)
})


let promise2=new Promise((resolve,reject)=>{
 let compro=false

setTimeout(()=>{
    resolve("Completed")
},2000)

})

promise2.then(res=>{

    console.log(res)
})

.catch(res=>{

    console.log(res)
})


let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("All are well")
    },1000)
  
})

.then(res=>{
    console.log(res)
})


Promise.all([promise1,promise2,promise3]).then((res)=>{
    console.log(res)

})

Promise.race([promise1,promise2,promise3])
    .then(res=>{
        console.log(res)
    })