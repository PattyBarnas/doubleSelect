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
  const [itemList, setItemList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [itemName, setItemName] = useState();
  useEffect(() => {
    setItemList(items);
  }, []);

  const getFilteredList = () => {
    if (!selectedCategory) return itemList;

    return itemList.filter((item) => {
      return item.category === selectedCategory;
    });
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);

  const categories = [...new Set(itemList.map((item) => item.category))];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleItemName = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div>
      {itemName && <h1>{itemName}</h1>}
      <div className="filter-container">
        <div className="category-container">
          <p>Category</p>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            {categories.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="name-container">
          <p>Name</p>
          <select onChange={handleItemName}>
            {filteredList.map((el, idx) => {
              return (
                <option key={idx} value={el.name}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
