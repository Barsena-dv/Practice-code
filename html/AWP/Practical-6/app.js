const calc = require('./calculator');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Choose operation (add/subtract/multiply): ", (op) => {
            const result = calc[op]?.(+a, +b);
            console.log("Result:", result ?? "Invalid operation");
            rl.close();
        });
    });
});
