export const addStudent = (student) => ({
  type: "ADD_STUDENT",
  payload: student,
});

export const deleteStudent = (roll_no) => ({
  type: "DELETE_STUDENT",
  payload: roll_no,
});

export const editStudent = (student) => ({
  type: "EDIT_STUDENT",
  payload: student,
});

export const getStudent = (id) => ({
  type: "GET_STUDENT",
  payload: id,
});
