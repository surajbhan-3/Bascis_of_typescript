
/// add function 

// a:number ==> signature 
const add= (a:number,b:number)=>{  

     return a+b;
}

add(1,2)


// supposed we need to return output as a string
// here we are defining that ouptut should be in string format 
// its returning a string

const add1=(a:number,b:number): string =>{
       
    return `${a+b}`
}

add1(1,3)


// basically what this function is not  returning anything so we used void 

const log=(message:string): void =>{

     console.log(message)
}

log("way ahead")