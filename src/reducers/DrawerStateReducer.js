export default (state = null, action) => {
  console.log(!action.payload);
  switch (action.type) {
    case 'drawer_state':
      return !action.payload;
    default:
      return state;
  }
};
