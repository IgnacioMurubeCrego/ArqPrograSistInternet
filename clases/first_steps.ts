const filter_even = (miArray:Array<number>) : Array<number> => {
    const newArray:Array<number> = [];
    for(let i = 0 ; i<miArray.length ; i++){
        (miArray[i] % 2 === 0) && newArray.push(miArray[i]);
    }
    return newArray;
}

console.log(filter_even([1,2,3,4]));