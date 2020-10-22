import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../Avatar";
const Student = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // alert(id);
  const state = useSelector((state) => state.students);
  // console.log("student data got");
  const students = state.students;

  const stud = students.filter((student) => {
    return id == student.roll_no;
  });

  const student = stud[0];

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                  {/* <!-- STUDENT PROFILE PICTURE --> */}
                  <Avatar
                    url={`https://i.pravatar.cc/150?img=${student.roll_no}`}
                  />
                  {/* <h2>Student Pic</h2> */}
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">STUDENT</h3>
                      <Link
                        className="btn btn-primary"
                        to={`/studentEditFrom/${id}`}
                        // onClick={() => dispatch(getStudent(id))}
                      >
                        Edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>Name: {student.name}</p>
                      <p>Roll No: {student.roll_no}</p>
                      <p>class: {student.class} </p>
                      <p>Section: {student.section}</p>
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

export default Student;
