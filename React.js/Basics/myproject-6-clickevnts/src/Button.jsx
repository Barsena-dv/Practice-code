
function Button(){
    
    const handleClick = (e) => e.target.textContent = "OUCH!";
    
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count ++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} Stop! clicking me`);
    //     }
    // };
    // const handleClick = () => console.log('OUCH!');
    // const handleClick2 = (name) => console.log(`${name} Stop Clicking Me!`)
    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me!</button>);
}
export default Button