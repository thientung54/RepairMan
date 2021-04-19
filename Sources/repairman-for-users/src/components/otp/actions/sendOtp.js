/* eslint-disable prettier/prettier */
import { createAction } from 'redux-actions';
import { OTP } from '../actionTypes/sendOtp';

export const sendOtpAction = createAction(OTP.SEND);
export const sendOtpSuccessAction = createAction(OTP.SEND_SUCCESS);
export const sendOtpFailureAction = createAction(OTP.SEND_FAILURE);
