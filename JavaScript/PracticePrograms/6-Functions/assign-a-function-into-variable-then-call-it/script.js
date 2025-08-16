let a = function(){

}
a();
//Pass a funtion into a function then accses it
function adfs(val){
    val();
}
adfs(function(){
    console.log("hi");
});