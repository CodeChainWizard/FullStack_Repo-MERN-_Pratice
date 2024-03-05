import React from "react";
import "./mobliList.css";

const MoblieList = (props) => {
  return (
    <div className="main_body">
      <img className="product_img" src={props.image_path} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default MoblieList;
