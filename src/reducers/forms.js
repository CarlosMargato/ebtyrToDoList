import { DELETETASKS, USERFORM } from "../actions";

const initialState = {
tasks: [],  
};

function tasksList (state = initialState, { type, payload }) {
  switch (type) {

      case USERFORM:
        return { 
          tasks: [ ...state.tasks, payload],
        }
  
     case DELETETASKS:
         return {
           ...state,
           tasks: state.tasks.filter((item, index) => index !== payload)
         }

  default:
    return state
  }
}

export default tasksList;