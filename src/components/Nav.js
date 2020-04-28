import React from "react";
import {useSelector} from 'react-redux'


const Nav = () => {
const item = useSelector(state => state.item)
  return (
    <nav className="navigator">
      <h2 className="heading">Todo List</h2>
      <p className="count">
        Items Added{" "}
        <span className="bg-white rounded-full  text-sm h-5 w-5 inline-block text-center">
          {item.length}
        </span>
      </p>
    </nav>
  );
};

export default Nav;