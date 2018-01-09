export default (state = null, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'current_image':
      return action.payload;
    default:
      return state;
  }
};
