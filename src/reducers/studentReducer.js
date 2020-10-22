const initialState = {
  students: [
    { name: "shubham", roll_no: "150701", class: "12", section: "A" },
    { name: "vikas", roll_no: "150702", class: "12", section: "A" },
    { name: "Neha", roll_no: "150703", class: "12", section: "A" },
    { name: "sonu", roll_no: "150704", class: "12", section: "A" },
  ],
  student: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };
    case "EDIT_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.roll_no == action.payload.roll_no ? action.payload : student
        ),
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.roll_no != action.payload
        ),
      };
    case "GET_STUDENT":
      const stud = state.students.filter(
        (student) => student.roll_no == action.payload
      );
      const student = stud[0];
      return {
        ...state,
        student: student,
      };
    default:
      return state;
  }
};

export default studentReducer;
