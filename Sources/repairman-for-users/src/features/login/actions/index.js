/* eslint-disable prettier/prettier */
import { createAction } from 'redux-actions';
import { LOGIN } from '../actionTypes/index';

export const loginAction = createAction(LOGIN.AUTH);
export const loginSuccessAction = createAction(LOGIN.AUTH_SUCCESS);
export const loginFailureAction = createAction(LOGIN.AUTH_FAILURE);
