import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTeacher } from "../actions/teacherAction";
import Avatar from "../Avatar";

const Teacher = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // alert(id);
  const state = useSelector((state) => state.teachers);
  // console.log("teacher data got", state.teachers);
  const teachers = state.teachers;

  const tech = teachers.filter((teacher) => {
    return id == teacher.teacher_id;
  });

  const teacher = tech[0];
  // console.log("i'm single teacher", teacher);

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                  {/* <!-- STUDENT PROFILE PICTURE --> */}

                  {/* <h2>Teacher Pic</h2> */}
                  <Avatar
                    url={`https://i.pravatar.cc/150?img=${teacher.teacher_id}`}
                  />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">TEACHER</h3>
                      <Link
                        className="btn btn-primary"
                        to={`/teacherEditFrom/${id}`}
                        // onClick={() => dispatch(getTeacher(teacher.teacher_id))}
                      >
                        Edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>Name: {teacher.name}</p>
                      <p>Teacher_Id: {teacher.teacher_id}</p>
                      <p>class: {teacher.class} </p>
                      <p>Section: {teacher.section}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
