import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';
import StoreReducer from './StoreReducer';
import FoodReducer from './FoodReducer';
import PostsReducer from './PostsReducer';
import DbRefReducer from './DbRefReducer';
import PurposeReducer from './PurposeReducer';
import LikeUrlReducer from './LikeUrlReducer';
import DrawerStateReducer from './DrawerStateReducer';
import CurrentImageReducer from './CurrentImageReducer';
import CurrentImageVisible from './CurrentImageVisibleReducer';

export default combineReducers({
//store.getState()  returns {currentLocation:[]}
  currentLocation: LocationReducer,
  postsDB: PostsReducer,
  storeDB: StoreReducer,
  foodDB: FoodReducer,
  dbRef: DbRefReducer,
  purpose: PurposeReducer,
  likeUrl: LikeUrlReducer,
  drawerState: DrawerStateReducer,
  currentImage: CurrentImageReducer,
  visible: CurrentImageVisible
});
