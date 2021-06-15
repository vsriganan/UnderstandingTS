let insertAtBeginning = function<T>(arrayVal: T[], seedVal: T){
    const newArray = [seedVal, ...arrayVal];
    return newArray;
}

let insertNumbers = insertAtBeginning([1,2,3], 0);
let insertStrings = insertAtBeginning(['one', 'two', 'three'], 'zero');