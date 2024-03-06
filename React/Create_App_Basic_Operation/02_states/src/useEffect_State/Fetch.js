import React, { useEffect, useState } from "react";
import fetch_data from "./fetch_data.json";

const Fetch = () => {
  const [data, setData] = useState(fetch_data);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {data.map((e) => (
          <li key={e.node_id}>
            <a href={e.html_url}>{e.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
