function addVals(n1: number, n2: number, showResult: boolean, showPhrase: string){
    // if(typeof n1 !== 'number' || typeof n2 !== 'number')
    // {
    //     throw new Error('Incorrect Input!')
    // }
    let result = n1 + n2;
    if(showResult)
    {
        console.log(showPhrase + result);
    }
    else{
        return result;
    }
}

let value1:number;
value1 = 5;
const value2 = 2.8;
const shdPrintResult = true;
const printPhrase = 'The result is: ';

addVals(value1, value2, shdPrintResult, printPhrase);