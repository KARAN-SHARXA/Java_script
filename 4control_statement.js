// Control flow statements in JavaScript control the order in which code is executed. These statements allow you to make decisions, repeat tasks, and jump between parts of a program based on specific conditions


const age = 18;
if (age>=18){
    console.log(age);
    
}


const score = 40;
if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("You failed.");
}


const temp = 25;
if (temp > 30) {
    console.log("It's hot.");
} else if (temp >= 20) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}


const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the workweek.");
        break;
    default:
        console.log("It's a regular day.");
}