import { call, put, takeLatest } from "redux-saga/effects";

import axios from "axios";

import {
    LOGIN_REQUEST,
    loginSuccess,
    loginFailure,
} from "../actions/authActions";

function* loginSaga(action) {

    try {

        const response = yield call(
            axios.get,
            "https://jsonplaceholder.typicode.com/users"
        );

        const user = response.data[0];

        if (user) {

            localStorage.setItem(
                "token",
                "user_logged_in"
            );

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            yield put(loginSuccess(user));

        } else {

            yield put(
                loginFailure("Invalid Email")
            );

        }

    } catch (error) {

        yield put(
            loginFailure("Something went wrong")
        );

    }

}

export default function* authSaga() {

    yield takeLatest(
        LOGIN_REQUEST,
        loginSaga
    );

}