let testArray = [-3,-2,-1,0,1,2,3];

function noNegatives(array){
let resultArray = [];
    array.forEach(element => {
    if(element >= 0 ){
        console.log(element);
        resultArray.push(element);
    }    
   
});
return resultArray;
}

console.log(noNegatives(testArray));