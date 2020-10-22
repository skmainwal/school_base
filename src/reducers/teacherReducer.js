const initialState = {
  teachers: [
    {
      name: "mohit Kumar",
      teacher_id: "T2345",
      class: "10",
      section: "A",
    },
    {
      name: "Mohan kumar",
      teacher_id: "T2346",
      class: "10",
      section: "A",
    },
    {
      name: "Sohan Kumar",
      teacher_id: "T2347",
      class: "10",
      section: "A",
    },
    {
      name: "Ravi Kumar",
      teacher_id: "T2348",
      class: "10",
      section: "A",
    },
  ],
  teacher: null,
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEACHER":
      return {
        ...state,
        teachers: [action.payload, ...state.teachers],
      };
    case "EDIT_TEACHER":
      return {
        ...state,
        teachers: state.teachers.map((teacher) =>
          teacher.teacher_id == action.payload.teacher_id
            ? action.payload
            : teacher
        ),
      };
    case "DELETE_TEACHER":
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher.teacher_id != action.payload
        ),
      };
    case "GET_TEACHER":
      const tech = state.teachers.filter(
        (teacher) => teacher.teacher_id == action.payload
      );
      const teacher = tech[0];
      return {
        ...state,
        teacher: teacher,
      };
    default:
      return state;
  }
};

export default teacherReducer;
