import React from "react";
import MoblieList from "./MoblieList";

const Mobile = () => {
  const product3 = {
    image_path:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/q/d/-original-imagtc4hzawdcp4g.jpeg?q=70&crop=false",
    title: "Apple iPhone 15 Pro (Black Titanium, 1 TB)(Called Product3 Map)",
    price: "₹1,77,990",
  };
  return (
    <div>
      <MoblieList
        image_path="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/m/u/-original-imagtc4hv5qhegyb.jpeg?q=70"
        title="Apple iPhone 15 Pro (White Titanium, 128 GB)"
        price="₹1,27,990"
      />
      <MoblieList
        image_path="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70&crop=false"
        title="Apple iPhone 15 Plus (Pink, 128 GB)"
        price="₹82,999"
      />
      <MoblieList
        image_path="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/q/d/-original-imagtc4hzawdcp4g.jpeg?q=70&crop=false"
        title="Apple iPhone 15 Pro (Black Titanium, 1 TB)"
        price="₹1,77,990"
      />
      <MoblieList
        image_path={product3.image_path}
        title={product3.title}
        price={product3.price}
      />
    </div>
  );
};

export default Mobile;
