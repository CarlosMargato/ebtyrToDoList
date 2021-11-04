
export const [
  USERLOGIN,
  USERFORM,
  DELETETASKS,
] = [
  'USERLOGIN',
  'USERFORM',
  'DELETETASKS',
];

export function userLogin(payload) {
  return {
    type: USERLOGIN,
    payload,
  };
};

export function tasksList(payload) {
  return {
    type: USERFORM,
    payload,
  };
};

export function deleteTasks(index) {
  return {
    type: DELETETASKS,
    payload: index,
  };
}