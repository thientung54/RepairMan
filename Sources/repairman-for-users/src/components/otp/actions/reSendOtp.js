/* eslint-disable prettier/prettier */
import { createAction } from 'redux-actions';
import { OTP } from '../actionTypes/reSendOtp';

export const reSendOtpAction = createAction(OTP.RESEND);
export const reSendOtpSuccessAction = createAction(OTP.RESEND_SUCCESS);
export const reSendOtpFailureAction = createAction(OTP.RESEND_FAILURE);
