function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100);
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
let thirty = discountCalculator(30);
let forty = discountCalculator(40);
let fifty = discountCalculator(50);
let sixty = discountCalculator(60);
let seventy = discountCalculator(70);
let eighty = discountCalculator(80);
console.log(ten(3000));