import { combineReducers } from "redux";
import apodReducer from "./Apod/apod-reducer";
import searchReducer from "./Search/search-reducer";
import listReducer from "./List/list-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["list"]
};


const rootReducer = combineReducers({
  apod: apodReducer,
  search: searchReducer,
  list: listReducer
});

export default persistReducer(persistConfig, rootReducer);

