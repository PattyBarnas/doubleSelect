import "./App.css";
import { useEffect, useMemo, useState } from "react";

const items = [
  {
    name: "apple",
    category: "fruit",
  },
  {
    name: "Cucumber",
    category: "vegetable",
  },
  {
    name: "Banana",
    category: "fruit",
  },
  {
    name: "Celery",
    category: "vegetable",
  },
  {
    name: "orange",
    category: "fruit",
  },
  {
    name: "sausage",
    category: "meat",
  },
  {
    name: "bacon",
    category: "meat",
  },
];

function App() {
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  function getFilteredList() {
    if (!category) {
      return items;
    }

    return items.filter((item) => item.category === category);
  }

  let filteredList = useMemo(getFilteredList, [category]);

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };
  console.log(filteredList);

  return (
    <div className="App">
      <h1>{item}</h1>

      <div className="category">
        <p>Category</p>
        <select value="category-list" onChange={handleCategoryChange}>
          <option value="">{category}</option>
          <option value="meat">meat</option>
          <option value="fruit">fruit</option>
          <option value="vegetable">vegetable</option>
        </select>
      </div>
      <div className="food-name">
        <p>Item</p>
        <select onChange={handleItemChange}>
          {filteredList.map((el, index) => {
            return (
              <option key={index} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default App;
