import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../actions/studentsAction";

const StudentForm = () => {
  const history = useHistory();
  const stud = useSelector((state) => state.student);

  const { Id } = useParams();

  const id = Id != null ? useParams : null;
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    name: "",
    roll_no: "",
    class: "",
    section: "",
  });

  if (id) {
    setStudent(stud);
  }

  //   if (stud) {
  //     setStudent(stud);
  //   }

  const changeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  if (id) {
    const student = student;
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (id) {
      console.log("id found");
    } else {
      dispatch(addStudent(student));
      setStudent({ name: "", roll_no: "", class: "", section: "" });
    }

    history.push("/students");
    // alert("form submited");
  };
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputEmail4">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              required
              value={student.name}
              onChange={changeHandler}
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Roll No</label>
            <input
              type="number"
              class="form-control"
              name="roll_no"
              required
              value={student.roll_no}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div class="form-row d-flex">
          <div class="form-group col-md-4">
            <label for="inputState">Class</label>
            <select
              name="class"
              class="form-control"
              value={student.class}
              onChange={changeHandler}
            >
              <option selected>Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Section</label>
            <select
              name="section"
              class="mdb-select md-form"
              value={student.section}
              onChange={changeHandler}
              multiple
            >
              <option selected>Choose...</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          {id != null ? "Update" : "Add_Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
