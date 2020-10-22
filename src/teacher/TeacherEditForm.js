import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTeacher, editTeacher } from "../actions/teacherAction";

const TeacherEditForm = () => {
  const history = useHistory();
  const state = useSelector((state) => state.teachers);
  const tech = state.teacher;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [teacher, setTeacher] = useState({
    name: "",
    teacher_id: "",
    class: "",
    section: "",
  });

  useEffect(() => {
    if (tech != null) {
      setTeacher(tech);
    }
    dispatch(getTeacher(id));
  }, [tech]);

  const changeHandler = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(editTeacher(teacher));

    history.push("/teachers");
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
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Teacher_Id</label>
            <input
              type="number"
              class="form-control"
              name="teacher_id"
              value={teacher.teacher_id}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default TeacherEditForm;
