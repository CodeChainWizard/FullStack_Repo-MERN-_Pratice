import "./App.css";

const App = () => {
  let a = 20;
  return (
    <div className="main_body">
      <h1>App Calling</h1>
      <p style={{ color: "white", backgroundColor: "blue", height: "30px" }}>
        This is React Componets
      </p>
      <p style={{ color: "white" }}>{a}</p>
    </div>
  );
};
export default App;
