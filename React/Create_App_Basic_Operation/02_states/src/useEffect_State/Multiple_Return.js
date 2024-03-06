import React, { useEffect, useState } from "react";

const Multiple_Return = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function FetchUser() {
      try {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setUser(data);
        setLoading(false);

        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    FetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <h1>Users List With Multiple Return</h1>
      <ul>
        {user.map((e) => {
          return (
            <li key={e.node_id}>
              <a href={e.login}>{e.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Multiple_Return;
