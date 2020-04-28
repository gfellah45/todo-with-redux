import React, { useState } from "react";
import {addItem} from '../redux/actions'
// usedispact is ise to send an action to the reducer
// use selector is use to pick a reducer from the store
import {useDispatch, useSelector} from 'react-redux'



const Form = () => {
  const [user, setUser] = useState("");
  const item = useSelector (state => state.item)//use reducer in acton 

  const dispatch = useDispatch()//use dispatch in action

  const handleSubmit =(e) => {
    e.preventDefault()
    const newItem = {
      id: Math.floor(Math.random() * 1000000),
      item: user,
      isResolved: false
    }

   dispatch(addItem(newItem))
   localStorage.setItem("todos", JSON.stringify(item))
    setUser("")
  } 

  return (
    <form onSubmit = {handleSubmit} >
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <input  type="submit" value="Add" />
    </form>
  );
};

export default Form;