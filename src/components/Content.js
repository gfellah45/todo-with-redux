import React from "react";
import {deleteItem, isResolved} from '../redux/actions'
import {useDispatch} from 'react-redux';



const Content = ({ todos }) => {
  
  const dispatch  = useDispatch();
  
  const handleDelte =(id) => {
    
    dispatch(deleteItem(id))
  }

   const itemResolved = (id) => {
     dispatch(isResolved(id))
   }
   const testResolved = todos.isResolved ? "my-2 text-gray-200  p-1 rounded font-bold line-through" : "my-2 text-gray-200  p-1 rounded font-bold "
  return (
    <div className="m-1">
      <li
        className={
          todos.isResolved
            ? "flex justify-between bg-red-500"
            : " flex justify-between bg-teal-700"
        }
      >
        <p className={testResolved}>
          {todos.item}
        </p>
        
        <div>
          <span>
            <button onClick={ () => itemResolved(todos.id)}>
              <i
                className="fas fa-check mx-2  p-2 my-1"
                style={{ color: "white" }}
              />
            </button>
          </span>
          <button onClick = { () => handleDelte(todos.id)}>
            <i className="fas fa-trash-alt p-2" style={{ color: "red" }} />
          </button>
          <span />
        </div>
      </li>
    </div>
  );
};
export default Content;