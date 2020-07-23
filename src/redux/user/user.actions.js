import UserActionTypes from "./user.types";
import { userApi } from "../../apis/api";

export const userLogin = (username, password) => async dispatch => {
    const response = await userApi.post("/users/signin", { username, password });
    dispatch({
        type: UserActionTypes.LOGIN,
        payload: response.data.token
    })
}