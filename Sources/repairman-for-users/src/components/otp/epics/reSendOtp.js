/* eslint-disable prettier/prettier */
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { OTP } from '../actionTypes/reSendOtp';
import { reSendOtpSuccessAction, reSendOtpFailureAction } from '../actions/reSendOtp';
import API_SERVICES from '../../../store/services';
import { configs } from '../../../configs';
const RESEND_OTP_API = API_SERVICES.URL_HOST_API + configs.OTP_API;

// RESEND_OTP
const reSendOtpEpic = action$ => action$.pipe(
    ofType(OTP.RESEND),
    mergeMap((action) => {
        console.log('RESEND OTP API:', RESEND_OTP_API);
        return ajax.post(RESEND_OTP_API, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => reSendOtpSuccessAction(response)),
            catchError(error => of(reSendOtpFailureAction(error)))
        );
    })
);

export { reSendOtpEpic };
