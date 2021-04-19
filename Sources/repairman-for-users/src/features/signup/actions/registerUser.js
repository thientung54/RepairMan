/* eslint-disable prettier/prettier */
import { createAction } from 'redux-actions';
import { REGISTER } from '../actionTypes/registerUser';

export const registerAction = createAction(REGISTER.ADD);
export const registerSuccessAction = createAction(REGISTER.ADD_SUCCESS);
export const registerFailureAction = createAction(REGISTER.ADD_FAILURE);
