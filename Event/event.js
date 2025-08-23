let button = document.getElementById("btn");
button.addEventListener("click",function(){
    alert("Button is clicked")
})


button.addEventListener("click",function(){
    console.log("another handler work");
    
})

let btn = document.getElementById("btn2");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("Event type",event.type);
    console.log("target elememt:",event.target);
    
});


// mouse event
let btn2 = document.getElementById("btn3");
btn2.addEventListener("click",()=> console.log("clickde"));
btn2.addEventListener("dblclick",()=>console.log("Double clicked"));
btn2.addEventListener("mouseenter",()=>console.log("mouse entered"));
btn2.addEventListener("mouseover",()=>console.log("mouse left"));


// keyboard events
let inp = document.getElementById("inp");
inp.addEventListener("keydown",e=>console.log("key down",e.key));
inp.addEventListener("keyup",e=>console.log("key up",e.key));

// form events
let form = document.getElementById("myForm");

form.addEventListener("submit",e=>{
    e.preventDefault(); // stop page relpad
    console.log("form submitted");
    
})

// Capturing → event top se niche aata hai.

// Target → jis element pe click kiya wo trigger hota hai.

// Bubbling → event niche se upar jata hai.

let grandParent = document.getElementById("grandParent");
  let parent = document.getElementById("parent");
  let child = document.getElementById("child");

grandParent.addEventListener("click",()=>{
    console.log("grandparent bubblng");
    
} );

 // Parent - Bubbling
  parent.addEventListener("click", () => {
    console.log("Parent Bubbling");
  });


  child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child Clicked");
  });
  let p = document.querySelector('#practise');
  let p2 = document.querySelector('#hw');

  p2.addEventListener("click",function(){
    p.style.color ='red';
    p.innerText='hi'
  });


  document.querySelector('#ll').addEventListener("clik",()=>{
    let p = document.querySelector('#EE');
    p.innerText='kkakakakakakakakak'
  })

  