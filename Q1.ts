function countvowels(str:any){
let vowels=`aeoiuAEIOU`
let count=0;
for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
}

return count;
}
let mystring="Hello imran hassan ,how are you!"
console.log(countvowels(mystring));