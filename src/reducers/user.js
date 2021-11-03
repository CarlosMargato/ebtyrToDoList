import { USERLOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',

};

function reducer(state = initialState, { type }) {
  switch (type) {
  case USERLOGIN:
    return state;

  default:
    return state;
  }
};

export default reducer;