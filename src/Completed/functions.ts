 function add(n1: number, n2:number)
 {
     return n1 + n2;
 }

 function printResult(result: number)
 {
     console.log('Result : ' + result.toString());
 }

 function addAndHandle(n1: number, n2: number, cb: (i:number) => void)
 {
     const result = n1 + n2;
     cb(result);
 }

 printResult(add(5,12));

 let combineValues : (a: number, b:number) => number;
 combineValues = add;
//  combineValues = 5;
//  combineValues = printResult;
 console.log(combineValues(8, 8))

 addAndHandle(10,20, (val)=>{
     console.log(val);
 });

 addAndHandle(12,11,printResult);