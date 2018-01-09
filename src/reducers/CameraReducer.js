export default (state = 'back', action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'camera':
      return action.payload;
    default:
      return state;
  }
};
