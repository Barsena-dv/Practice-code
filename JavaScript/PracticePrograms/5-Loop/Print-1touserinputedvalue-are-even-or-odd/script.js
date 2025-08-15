let val = prompt("Enter a value");
for(let i=1; i<=val; i++){
    if(i%2 === 0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}