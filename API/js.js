const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#button");


const getFacts = async () =>{

    console.log("getting data ....");
    
    let response = await fetch(URL);
    console.log(response); // JSON object foramt
    let data = await response.json();
    console.log(data.fact);
    factPara.innerText = data.fact
}
btn.addEventListener("click",getFacts);




//Promise channing 

// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//          factPara.innerHTML=data.fact;

        
//     })
// }

// btn.addEventListner("clcik",getFacts);


