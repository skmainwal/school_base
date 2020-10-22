import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
export default combineReducers({
  students: studentReducer,
  teachers: teacherReducer,
});
