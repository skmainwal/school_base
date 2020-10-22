import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStudent, editStudent } from "../actions/studentsAction";

const StudentForm = () => {
  const history = useHistory();
  const state = useSelector((state) => state.students);
  const stud = state.student;
  console.log("hi' i'm editpage");
  const { id } = useParams();
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    name: "",
    roll_no: "",
    class: "",
    section: "",
  });

  useEffect(() => {
    if (stud != null) {
      setStudent(stud);
    }
    dispatch(getStudent(id));
  }, [stud]);

  const changeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(editStudent(student));

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
              class="form-control"
              value={student.section}
              onChange={changeHandler}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
