export const selectLocation = (location) => {
  return {
    type: 'select_location',
    payload: location
  };
};
