//In JavaScript, an array is an ordered list of values

let a = [];
console.log(a);


let b =[10,30,40];
console.log(b);


let c = new Array(10,30,40);
console.log(c);



let d =['HTML','CSS','js'];
console.log(d[0]);

let e =['HTML','CSS','JS'];
console.log(e[e.length-1]);

let f =['a','b','c'];
console.log(f);
f[1]='x';
console.log(f);


// adding element to the array

let g =['a','b','c','d'];
g.push('karan');

g.unshift('rahul');
console.log(g);

// removing elements from an array

let h =['a','b','c'];
h.pop();
console.log(h);

h.shift();
console.log(h);

let k =['a','b','c','d'];
k.splice(0,1)
console.log(k);

//Array length
let l =['a','b','c'];
console.log(l.length);

//increase and decrease the array length

let j =['a','b','c','d']
j.length=7;
console.log(j);
j.length=2;
console.log(j);

//Iterating Through Array Elements

let pp = ["HTML", "CSS", "JS"];

for(let i =0;i<pp.length;i++){
    console.log(pp[i]);
    
}


let cc =['a','b','c'];
for(let val of cc){
    console.log(val);
    
}

// concat in array

let aaa = ["HTML", "CSS", "JS", "React"];
let bbb = ["Node.js", "Expess.js"];
console.log(aaa.concat(bbb));




// converting to string

// Creating an Array and Initializing with Values
let aaaaa = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(aaaaa.toString());


