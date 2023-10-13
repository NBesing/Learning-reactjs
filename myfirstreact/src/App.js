import './App.css';

function App() {
  const name="Naura";
  return (
    <div className="App">
    <User name="Naura" email="bnaura@gmail.com" age={21} />
    <User name="favour" email="favoura@gmail.com" age={21} />
    <User name="Joel" email="joella@gmail.com" age={21} />
    </div>
  );
}
const User=(props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h3>{props.age}</h3>
    </div>
  )
}

export default App;
