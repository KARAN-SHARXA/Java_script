// function cookBiryani(){
//     return new Promise((resolve)=>{
//         console.log("cookin biryani..");
//         setTimeout(()=>resolve("biryani ready"),2000);
        
//     });
// }

// cookBiryani().then(result => console.log(result));


// function boilwater(){
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve("step1 : Boil water"),1000);
//     });
// }

// function addtealeaves(){
//     return new Promise(resolve =>{
//         setTimeout(()=>resolve("step2 add tea leaves"),1000);
//     })
// }

// function addMilk(){
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve("step add milk"),1000)
//     });
// }

// boilwater() 
//          .then(res =>{
//             console.log(res);
//             return addtealeaves();
            
//          })






function getData(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Data received"),2000);
    });
}

async function showdata(){
    console.log("Fetching...");
    let result = await getData();
    console.log(result);
    console.log("Done");
}

showdata()


