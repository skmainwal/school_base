import React from "react";
import Student from "./Student";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../actions/studentsAction";
import Avatar from "../Avatar";
import "../App.css";
function Students() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.students);
  const students = state.students;
  console.log(students);

  const deleteHandler = (roll_no) => {
    dispatch(deleteStudent(roll_no));
  };

  return (
    <div className="">
      <div className="float-right ">
        <form onSubmit={(e) => e.preventDefault()}>
          <Link to="/studentForm">
            <button className="btn btn-primary">Add Student</button>
          </Link>
        </form>
      </div>

      <div className="container">
        <div className="py-4">
          <div className="row">
            {students.map((student) => (
              <div className="col-lg-3 col-md-6 mb-4" key={student.roll_no}>
                <div className="card shadow text-center py-4">
                  <Avatar
                    url={`https://i.pravatar.cc/150?img=${student.roll_no}`}
                  />
                  {/* <h3>Photo</h3> */}
                  <h5 className="card-title mb-0">{student.name}</h5>
                  <div className="card-body">
                    <Link
                      to={`/student/${student.roll_no}`}
                      className="btn btn-primary btn-profile"
                    >
                      View Profile
                    </Link>
                    <button className="btn btn-edit" onClick="">
                      <span
                        className="material-icons"
                        onClick={() => deleteHandler(student.roll_no)}
                      >
                        delete_outline
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
