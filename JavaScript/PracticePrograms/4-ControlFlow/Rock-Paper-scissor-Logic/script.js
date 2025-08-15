//Rock Paper Scissors
function rps(user,computer){
    if(user === computer) return "draw"
    if(user === "rock" && computer === "scissor")
        return "user";
    if(user === "scissor" && computer === "rock")
        return "computer";
    if(user === "scissor" && computer === "paper")
        return "user";
    if(user === "paper" && computer === "rock")
        return "user";
    if(user === "paper" && computer === "scissor")
        return "computer";
    if(user === "rock" && computer === "paper")
        return "computer";
}
console.log(rps("rock","scissor"));