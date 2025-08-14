
function List(props) {
    const category = props.category;
    const itemList = props.items;

    itemList.sort((a, b) => a.name.localeCompare(b.name)); //Alphabatical(lexicographically)
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabatical(Antilexicographically)
    //fruits.sort((a,b) => a.calories - b.calories); //Numerical
    //fruits.sort((a,b) => b.calories - a.calories); //Reverse Numerical

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 60);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 60);

    // const listItems = highCalFruits.map(
    //     highCalFruit => 
    //         <li key={highCalFruit.id}>
    //             {highCalFruit.name}:&nbsp; <b>{highCalFruit.calories}</b>kcal
    //         </li>
    // );

    const listItems = itemList.map(
        item =>
            <li key={item.id}>
                {item.name}:&nbsp; <b>{item.calories}</b>kcal
            </li>
    );

    return (
        <>
            <h3 className="cat-list">{category}</h3>
            <ul className="itm-list">{listItems}</ul>
        </>
    );
}
export default List