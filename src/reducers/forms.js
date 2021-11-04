import { USERFORM } from "../actions";

const initialState = {
tasks: [],  
};

function tasksList (state = initialState, { type, payload }) {
  switch (type) {

  case USERFORM:
    return { 
      tasks: [ ...state.tasks, payload],
     }

  default:
    return state
  }
}

export default tasksList;