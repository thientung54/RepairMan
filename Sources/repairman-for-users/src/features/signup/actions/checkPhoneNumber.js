/* eslint-disable prettier/prettier */
import { createAction } from 'redux-actions';
import { CHECK_PHONE_NUMBER } from '../actionTypes/checkPhoneNumber';

export const checkPhoneNumberAction = createAction(CHECK_PHONE_NUMBER.FIND);
export const checkPhoneNumberSuccessAction = createAction(CHECK_PHONE_NUMBER.FIND_SUCCESS);
export const checkPhoneNumberFailureAction = createAction(CHECK_PHONE_NUMBER.FIND_FAILURE);
