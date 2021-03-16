import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router} from "react-router-dom"

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
    <Router>
      <div className="App">
        <Header dark={true} className="pl-4">Header</Header>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul class="list-group mt-3">
                {[...students].map((items,key) => (
                  <li class="list-group-item" key={key/*items.Rank*/}>{items.FirstName}</li>
                )) }
              </ul>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </div>  
    </Router>
  );
}

export default App;
