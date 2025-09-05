import List from './list.jsx';
function App() {
    const fruits = [
      {id: 1,name: "apple", calories: 52},
      {id: 2,name: "orange", calories: 47},
      {id: 3,name: "banana", calories: 89},
      {id: 4,name: "mango", calories: 60},
      {id: 5,name: "watermelon", calories: 30}
    ];
    const vegitables = [
      {id: 6,name: "Potato", calories: 77},
      {id: 7,name: "Carrot", calories: 41},
      {id: 8,name: "Radish", calories: 16},
      {id: 9,name: "Onion", calories: 40},
      {id: 10,name: "Cabbage", calories: 25}
    ];
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegitables.length > 0 ? <List items={vegitables} category="Vegitables" /> : null}
    </>
  );
}

export default App
