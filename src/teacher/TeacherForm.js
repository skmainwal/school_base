import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTeacher } from "../actions/teacherAction";

const TeacherForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.teacher);
  //   const Teacher = state.teacher;
  const [teacher, setTeacher] = useState({
    name: "",
    teacher_id: "",
    class: "",
    section: "",
  });

  const changeHandler = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    dispatch(addTeacher(teacher));
    e.preventDefault();

    history.push("/teachers");
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
              value={teacher.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Teacher_Id</label>
            <input
              type="text"
              class="form-control"
              name="teacher_id"
              value={teacher.teacher_id}
              onChange={changeHandler}
              required
            />
          </div>
        </div>

        <div class="form-row d-flex">
          <div class="form-group col-md-4">
            <label for="inputState">Class</label>
            <select
              name="class"
              class="form-control"
              value={teacher.class}
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
              value={teacher.section}
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
          {id ? "Edit " : "Add_Teacher"}
        </button>
      </form>
    </div>
  );
};

export default TeacherForm;
