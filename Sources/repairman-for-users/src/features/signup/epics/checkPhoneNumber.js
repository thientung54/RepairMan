/* eslint-disable prettier/prettier */
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { CHECK_PHONE_NUMBER } from '../actionTypes/checkPhoneNumber';
import { checkPhoneNumberSuccessAction, checkPhoneNumberFailureAction } from '../actions/checkPhoneNumber';
import API_SERVICES from '../../../store/services';
import { configs } from '../../../configs';
const CHECK_PHONE_NUMBER_API = API_SERVICES.URL_HOST_API + configs.CHECK_PHONENUMBER_API;

// CHECK_PHONE_NUMBER
const checkPhoneNumberEpic = action$ => action$.pipe(
    ofType(CHECK_PHONE_NUMBER.FIND),
    mergeMap((action) => {
        console.log(CHECK_PHONE_NUMBER_API);
        return ajax.getJSON(CHECK_PHONE_NUMBER_API + encodeURIComponent(action.payload.phone_number), API_SERVICES.HEADERS()).pipe(
            map(response => checkPhoneNumberSuccessAction(response)),
            catchError(error => of(checkPhoneNumberFailureAction(error)))
        );
    })
);

export { checkPhoneNumberEpic };
