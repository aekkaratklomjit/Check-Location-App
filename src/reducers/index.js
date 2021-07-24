import { combineReducers } from "redux";
import LocationReducers from "./LocationReducers";
import CurrentLocationReducers from  './CurrentLocationReducers'

const rootReducer = combineReducers({
    blogsLocation : LocationReducers,
    blogsCurrentLocation:CurrentLocationReducers
 })
export default rootReducer;