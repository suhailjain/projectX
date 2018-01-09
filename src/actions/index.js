export const selectLocation = (location) => {
  return {
    type: 'select_location',
    payload: location
  };
};

export const postUrl = (url) => {
  return {
    type: 'posts_url',
    payload: url
  };
};

export const storeUrl = (url) => {
  return {
    type: 'store_url',
    payload: url
  };
};

export const foodUrl = (url) => {
  return {
    type: 'food_url',
    payload: url
  };
};

export const dbRef = (ref) => {
  return {
    type: 'db_ref',
    payload: ref
  };
};

export const purpose = (purposed) => {
  return {
    type: 'purpose',
    payload: purposed
  };
};

export const likeUrl = (url) => {
  return {
    type: 'like_url',
    payload: url
  };
};

export const drawerState = (toggle) => {
  return {
    type: 'drawer_state',
    payload: toggle
  };
};

export const currentImage = (url) => {
  return {
    type: 'current_image',
    payload: url
  };
};

export const currentImageVisible = (bool) => {
  return {
    type: 'curr_pic',
    payload: bool
  };
};
