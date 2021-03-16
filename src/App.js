import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"   //Learned real use of Route and Link components and these are Amazing.

const Student = ({student}) => {  
  return (
  <div>
    <h1>{student.Name}</h1>
    <p>My Name is {student.Name}. I am currently having {student.Rank} Rank and I have scored {student.Marks} Marks. 
    I am persuing my dream and I will finally get it no matter what. I will try my level best.</p>
  </div>
  );
};

const Sidear = ({students, match}) => {   //Use of match parameter.
  return(
    <div>
      {[...students].map((items,key) => (
        <Link 
          to = {items.FirstName}
          className={`list-group-item list-group-item-action`+(match.params.FirstName === items.FirstName?` active`:``)} 
          key={key}>
            {items.Name}
        </Link>
      )) }
    </div>
  )
}

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
        <Header dark={true} className="pl-4">
          <Link to="/" className="navbar-brand">
          Header
          </Link>
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul className="list-group mt-3">
                <Route
                  path={["/:FirstName","/"]}    //Amazing way of adding same functionality for multiple pages.
                  render={({match}) => (
                    <Sidear students={students} match={match}/> 
                  )} >
                </Route>
              </ul>
            </div>
            <div className="col-8">
              <Route path="/" exact={true}>
                <h1>Welcome to the data</h1>
                <p>Select from right.</p>
              </Route>
              {students.length > 0 && (
              <Route 
                path="/:FirstName"
                render={({match}) => (      //Use of match paremeter.
                  <Student
                    student={students.find((student) =>     //Ultimate use of Find function.
                      student.FirstName === match.params.FirstName
                    )}
                    />
                )
                }
              >
              </Route>
              )}
            </div>
          </div>
        </div>
      </div>  
    </Router>
  );
}

export default App;
