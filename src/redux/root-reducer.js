import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducers";
import bookingReducer from "./booking/booking.reducer";

const persistConfig = {
    key: "perfume-app",
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    user: userReducer,
    booking: bookingReducer
})

export default persistReducer(persistConfig, rootReducer);