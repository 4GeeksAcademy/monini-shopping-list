import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [shopping, setShopping] = useState([]);
  const [hoveredTask, setHoveredTask] = useState(null);

  const deleteItem = (id) => {
    setShopping(shopping.filter((item) => item.id !== id));
  };

  return (
    <div className="content">
      <div className="tittle">
        <h1>
          Shopping list{" "}
          <i className="fa-solid fa-basket-shopping" style={{ color: "purple" }}></i>
        </h1>
      </div>
      <div className="container">
        <div>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setShopping([
                  ...shopping,
                  { id: Math.random(), text: inputValue },
                ]);
                setInputValue("");
              }
            }}
            placeholder="What do you need to buy?"
          />
        </div>

        <ul>
          {shopping.length === 0 ? ( // si no hay tareas
            <li>There's nothing in the shopping list, add items</li>
          ) : (
            shopping.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"}}
                onMouseEnter={() => setHoveredTask(item.id)} // Muestra el ícono al pasar el ratón
                onMouseLeave={() => setHoveredTask(null)} // Oculta el ícono al salir
              >
                {item.text}
                  <i
                    className="fa-solid fa-x"
                    onClick={() => deleteItem(item.id)}
                  ></i>
                
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
