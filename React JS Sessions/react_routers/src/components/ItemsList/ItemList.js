import React, { useState } from "react";
import data from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = (props) => {
  const [courses] = useState(data);
  console.log(props);
  return (
    <div className="courses">
      {courses.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ItemList;
