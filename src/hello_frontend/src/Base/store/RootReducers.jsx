import { combineReducers } from "redux";
import AuthSlice from "../../features/reducers/UserSlice"

export const rootReducer = combineReducers({
    userTokens: AuthSlice,

});