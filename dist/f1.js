/// add function 
// a:number ==> signature 
const add = (a, b) => {
    return a + b;
};
add(1, 2);
// supposed we need to return output as a string
// here we are defining that ouptut should be in string format 
// its returning a string
const add1 = (a, b) => {
    return `${a + b}`;
};
add1(1, 3);
// basically what this function is not  returning anything so we used void 
const log = (message) => {
    console.log(message);
};
log("way ahead");
