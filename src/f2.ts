let arr1:number[]=[1,2,3];
arr1.push(4);
//  the above code interpret as number array
// arr1.push("good things"); throwing errrors



// this below code interpret  as number of array of number or stirng 
let arr2: Array<number> | string = [1,2,3,4]

arr2.push(5)


let arr3: string[]=["A","b"];

arr3.push("dfd")


let arr4: readonly String[]=["d","df"]
