import { USERLOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',

};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
  case USERLOGIN:
    return {
      email: payload.email,
      password: payload.password,
    };

  default:
    return state;
  }
};

export default reducer;