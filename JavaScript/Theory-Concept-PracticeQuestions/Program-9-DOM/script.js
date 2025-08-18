//DOM manipulation
//html se element select karna
//text badalna
//html badalna
//css badalna
//attribute badalna
//event listners


//Selecting Elements

// let abd = document.getElementById("abd");//This selects the element with its id name
// let abd = document.getElementsByClassName("abd");//This selects an element bt its class name
// let abd = document.querySelectorAll("h1")//This also selects an element by itself but it selct all the element which are in the body.
// let abd = document.querySelector("h1");//This selects an element by itself byt only the first element in the body.
// console.dir(abd);//By this we can check the displayed value or values are placed in which objects with the help of the console in the browser


//Elements Access
let abd = document.querySelector("h1");
abd.innerHTML= "<i>Hello Dhruv Kaise ho</>";//Then hey we can select that object to changet the value or values by selcting teh key whare the value is contained.
//Form the 'innerHtml' you can add an html tag in the values of the selected element like here we have contained the value in the '<i></>' so the output will be in the italic just like that if i want it to make bold i can make bold just by containing the value in the bold tag.No need to change the original in the Html file.
//Just like that you can manipulate that element by selecting the property or key of the object you see in the console of the browser.Like see below for an example
// abd.hidden = true;//Here we have hidden the element so the display will not show any thing and if you see in the inspect the html is alterd but you orignal html file is not having that alteration.


//Attribute Manipulation

//Let's 1st know what a attribute is you see in an html in an element tag after the tag name whatever is written is can be called an attribute like '<meta name="viewport" content="width=device-width, initial-scale=1.0">' after the meta all the elements are attributes.
//So attribute manipulation is basically by the help of the JavaScript we change,delte,modify,give or any kind of modification and alteration is we call attribute manipulation
//Now let's see how its done
//let bhg = document.querySelector("a");//we selected the a tag and saved it in the variable.
// bhg.href = "https://www.google.com";//Here we selected attribute and placed a value

//setAttribute

//By 'setAttribute' we can do the attribute manipulation in easier way here we have to pass 2 values first is the attribute you want to maniputale(modifying,altering) and manipulation(value you want to place or change)
//bhg.setAttribute("href","https://www.youtube.com");//like here
// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1755100840732-8c01b32ddd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8");

//getAttribute

//By 'getAttribute' we take a value for the attributes
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

//removeAttribute

//By 'removeAttribute' we remove the attribute from the tag.
// let a = document.querySelector("a");
// a.removeAttribute("href");


//Dynamic DOM manipulation

//createElement,appendChild,prpendChild,removeChile
//In this here are two parts 1st is create an element and append or preppend it
// let h2 = document.createElement("h2");
// h2.textContent = "Hello Ji";
//document.body.append(h2);//this is a way and below by queryselector is also a way.Append means in the body tag last element will be this
// document.querySelector("body").append(h2);
// document.body.prepend(h2);//Prepend means that it will be the 1st element will be this. 
// document.querySelector("body").prepend(h2);
//removeChild is basicaly used to remove an element can be use as 'h2.remove()'


//Style Updates via .style and classList(add,remove,toggle)

let h1 = document.querySelector("h1");
// h1.style.color = "red";
h1.classList.add("bob");