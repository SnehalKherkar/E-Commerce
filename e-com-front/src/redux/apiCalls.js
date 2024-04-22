import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"



export const login = async (dispatch, user) => {
dispatch(loginStart());
try {
    const res = await axios.post("http://localhost:1000/api/auth/login",user);
    dispatch(loginSuccess(res.data))
    return res.data
} catch (error) {
    dispatch(loginFailure())
    throw error;
}
}