import React from "react";
import Content from "./Content";
import { useSelector} from "react-redux";

const ContentList = () => {
  const item = useSelector( state => state.item)

  return (
    <div>
      {item.map( item => <Content key={item.id} todos={item}  />)}
        
    
    </div>
  );
};
export default ContentList;