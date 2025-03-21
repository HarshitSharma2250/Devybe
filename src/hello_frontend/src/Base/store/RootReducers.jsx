import { combineReducers } from "redux";
import AuthSlice from "../../features/reducers/UserSlice"
import DashboardSlice from "../../features/reducers/userDasboardSlice"




export const rootReducer = combineReducers({
    userTokens: AuthSlice,
    dashboardData:DashboardSlice
});