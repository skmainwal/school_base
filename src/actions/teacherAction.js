export const addTeacher = (teacher) => ({
  type: "ADD_TEACHER",
  payload: teacher,
});

export const deleteTeacher = (id) => ({
  type: "DELETE_TEACHER",
  payload: id,
});

export const editTeacher = (teacher) => ({
  type: "EDIT_TEACHER",
  payload: teacher,
});

export const getTeacher = (id) => ({
  type: "GET_TEACHER",
  payload: id,
});
