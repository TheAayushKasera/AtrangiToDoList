import React, { useState, useEffect } from "react";
import "./index.css";

const Todo = () => {
  const [num, setnum] = useState(0);
  const [item, setItem] = useState("");
  const fun = () => {
    let a = JSON.parse(localStorage.getItem("arr"));
    if (a) {
      return a;
    } else {
      return [];
    }
  };
  const [arr, setarr] = useState(fun);

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arr));
  }, [arr]);

  const chn = (e) => {
    if (item == "") {
      alert("Enter item to Add");
      e.preventDefault();
      return;
    }
    const demo = {
      key: num,
      item: item,
    };
    setarr([...arr, demo]);
    setItem("");
    setnum(num + 1);
    e.preventDefault();
  };

  const inputEvent = (e) => {
    setItem(e.target.value);
  };

  const delitem = (e) => {
    var filtered = arr.filter((val, index) => {
      return val.key != e.target.value;
    });
    setarr(filtered);
  };

  return (
    <div className="todo-box">
      <div className="heading">Atrangi To Do List 📝</div>
      <form className="in-box" onSubmit={chn}>
        <input
          type="text"
          className="in"
          value={item}
          placeholder="Add Item to do"
          onChange={inputEvent}
        ></input>

        <button className="in-btn" type="submit">
          +
        </button>
      </form>

      <div className="list-box">
        {arr.map((e, i) => {
          return (
            <div key={e.key} className="list-item-box">
              <label>{e.item}</label>
              <button className="delete-btn" value={e.key} onClick={delitem}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
