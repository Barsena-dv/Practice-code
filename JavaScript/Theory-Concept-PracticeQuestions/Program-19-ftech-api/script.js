fetch("https://randomuser.me/api/?results=5")
    .then((rawdata) => rawdata.json())
    .then((data) => console.log(data.results))
    .catch((err) => console.log(err));