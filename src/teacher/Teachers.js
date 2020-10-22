import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTeacher } from "../actions/teacherAction";
import Avatar from "../Avatar";

function Teachers() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.teachers);
  console.log("i'm teachers page", state.teachers);
  const teachers = state.teachers;

  const deleteHandler = (id) => {
    dispatch(deleteTeacher(id));
  };

  return (
    <div className="">
      <div className="float-right ">
        <form onSubmit={(e) => e.preventDefault()}>
          <Link to="/teacherForm">
            <button className=" btn btn-primary">Add Teacher</button>
          </Link>
        </form>
      </div>

      <div className="container">
        <div className="py-4">
          <div className="row">
            {teachers.map((teacher) => (
              <div className="col-lg-3 col-md-6 mb-4" key={teacher.teacher_id}>
                <div className="card shadow text-center py-4">
                  <Avatar
                    url={`https://i.pravatar.cc/150?img=${teacher.teacher_id}`}
                  />
                  {/* <h3>Photo</h3> */}
                  <h5 className="card-title mb-0">{teacher.name}</h5>
                  <div className="card-body">
                    {/* <h5 className="card-title mb-0">{teacher.teacher_id}</h5> */}
                    {/* <p className="text-muted small">{student.email}</p> */}
                    <Link
                      to={`/teacher/${teacher.teacher_id}`}
                      className="btn btn-primary btn-profile"
                    >
                      View Profile
                    </Link>
                    <button className="btn btn-edit" onClick="">
                      <span
                        className="material-icons"
                        onClick={() => deleteHandler(teacher.teacher_id)}
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

export default Teachers;
