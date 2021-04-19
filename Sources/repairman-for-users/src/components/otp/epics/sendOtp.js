/* eslint-disable prettier/prettier */
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { OTP } from '../actionTypes/sendOtp';
import { sendOtpSuccessAction, sendOtpFailureAction } from '../actions/sendOtp';
import API_SERVICES from '../../../store/services';
import { configs } from '../../../configs';
const SEND_OTP_API = API_SERVICES.URL_HOST_API + configs.OTP_API;

// OTP
const sendOtpEpic = action$ => action$.pipe(
    ofType(OTP.SEND),
    mergeMap((action) => {
        console.log(SEND_OTP_API);
        return ajax.post(SEND_OTP_API, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => sendOtpSuccessAction(response)),
            catchError(error => of(sendOtpFailureAction(error)))
        );
    })
);

export { sendOtpEpic };
