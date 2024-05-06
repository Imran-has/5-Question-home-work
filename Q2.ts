function isprim(number:any,divisor=2){
    if(number<=2){
        return number===2;
    }
    if (number %divisor===0){
        return false;
    }
    if(divisor *divisor>number){
        return true;
    }

return isprim(number,divisor+1);
}
console.log(isprim(19))
console.log(isprim(20));
console.log(isprim(17))
console.log(isprim(15));