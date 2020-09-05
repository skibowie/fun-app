import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_KCAL } from "../types";
import * as firebase from 'firebase';


export const saveUserKcal = (kcal) => (dispatch) => {
    const db = firebase.firestore();
    dispatch({ type: CHANGE_STATUS_FETCHING});
    const email = localStorage.getItem("user");
    db.collection('users').doc(email).update({
        requireKcal: kcal
    }).then(() => {
       dispatch({type: SET_USER_KCAL, payload: kcal });
    });
    dispatch({ type: CHANGE_STATUS_FULFILLED});
};