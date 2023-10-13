import './App.css'
function App() {
    return(<div classname="App">
       <Job company="Afrovision" position="UI/UX designer" salary={50000} /> 
       <Job company="Speednet" position="developer" salary={60000} /> 
       <Job company="Summit tech" position="CEO" salary={100000} /> 

    </div>); 
}
const Job=(props) =>{
    <><h1>{props.company}</h1>
    <h1>{props.position}</h1>
    <h1>{props.salary}</h1></>


}

export default App;