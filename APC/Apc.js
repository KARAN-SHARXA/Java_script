// sync = line by line code
// async = when ready to run

console.log("hello");
console.log("sumit");
setTimeout(() => {
    console.log("ram ram mitter");
    
    
}, 2000);
console.log("bro is good");


// call back = kchderbadchalunga

function oderPizza(callback){
    console.log("pzza is ordered ....");
    setTimeout(()=>{
        console.log("pizaa is ready");
        callback();
        
    },2000);
    
}

function eatPiza(){
    console.log("Eating pizza now...");
    
}
oderPizza(eatPiza)


function downloadfile(url,callback){
    console.log("downloading file from:" + url);
    setTimeout(()=>{
        console.log("file download");
        callback();
        
    },2000);
    
}

function processfile(){
    console.log("file processed successfully");
    
}
downloadfile("http://example.com/file.jpg",processfile)


