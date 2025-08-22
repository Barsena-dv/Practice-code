//local storage
//store kaise kare - setItem (If you try to store a value which is not string it will not store properly. But you can bypass it with JSON.stringify([]))
//data fetch kaise karein - getItem (and when we fetch the stringified data if will come in the array so to use it we have to JSON.parse() on it for accessing)
//remove kaise karein - removeItem
//update kaise karein - by overiting the value with the setItem

localStorage.setItem("name","harsh");//this is how we set storage

let val = localStorage.getItem("name");//This how we fetch the items from the storage


//cookies:a very small amount of data collected by the browser like you credentials you need for the session.And it will automatically goes to the server after the reload in the browser.