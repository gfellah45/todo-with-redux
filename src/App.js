import React from "react";
import "./styles.css";
import Nav from './components/Nav';
import ContentList from './components/ContentList';
import Form from './components/Form';


export default function App() {
  
  
  return (

    <div className="App">
      <Nav />
      <Form />
      <ContentList />
    </div>
  );
}
