import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Students from "./student/Students";
import Student from "./student/Student";
import Teachers from "./teacher/Teachers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store/stote";
import StudentForm from "./student/StudentForm";
import StudentEditForm from "./student/StudentEditForm";
import TeacherForm from "./teacher/TeacherForm";
import Teacher from "./teacher/Teacher";
import TeacherEditForm from "./teacher/TeacherEditForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/student/:id" component={Student} />

            <Route exact path="/studentForm" component={StudentForm} />
            <Route
              exact
              path="/studentEditfrom/:id"
              component={StudentEditForm}
            />

            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/teacher/:id" component={Teacher} />
            <Route exact path="/teacherForm" component={TeacherForm} />
            <Route
              exact
              path="/teacherEditForm/:id"
              component={TeacherEditForm}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
