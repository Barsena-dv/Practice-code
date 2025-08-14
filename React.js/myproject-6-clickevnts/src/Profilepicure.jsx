
function Profilepicure(){

    const imageUrl = './src/assets/profile.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={handleClick} src={imageUrl}></img>);
}
export default Profilepicure