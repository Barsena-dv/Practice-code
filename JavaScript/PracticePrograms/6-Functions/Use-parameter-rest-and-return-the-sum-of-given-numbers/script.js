function dass(...val){
    let total = 0;
    val.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(dass(1,2,3,5,6,7,8,5,4));