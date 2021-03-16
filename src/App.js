import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/Header"

function App() {

  const [students,setStudents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        fetch("data.json")
        .then((res) => res.json())
        .then((students) => setStudents(students));
    },1000)
  })

  return (
    <div className="App">
      <Header dark={true} className="pl-4">Header</Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {students.length > 0? <pre className="border rounded bg-light p-3">
              {JSON.stringify(students,null,2)}
            </pre>: "Loading..."}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
