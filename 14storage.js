// Local Storage = permanently store data

localStorage.setItem("name","karan");

let name = localStorage.getItem("name")
console.log(name);


localStorage.removeItem("name");

localStorage.clear();


// Session storage

// Data tab tak rahega jab tak browser tab open hai.

// Syntax is similar to Local Storage:

// Save data
sessionStorage.setItem("email", "karan@example.com");

// Get data
console.log(sessionStorage.getItem("email"));

// Remove data
sessionStorage.removeItem("email");

// Clear all
sessionStorage.clear();
