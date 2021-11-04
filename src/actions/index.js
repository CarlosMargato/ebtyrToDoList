
export const [
  USERLOGIN,
    USERFORM,
] = [
  'USERLOGIN',
  'USERFORM',
];

export function userLogin(payload) {
  return {
    type: USERLOGIN,
    payload,
  };
}

export function tasksList(payload) {
  return {
    type: USERFORM,
    payload,
  };
}