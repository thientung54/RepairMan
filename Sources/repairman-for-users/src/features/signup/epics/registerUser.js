/* eslint-disable prettier/prettier */
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { REGISTER } from '../actionTypes/registerUser';
import { registerSuccessAction, registerFailureAction } from '../actions/registerUser';
import API_SERVICES from '../../../store/services';
import { configs } from '../../../configs';
const REGISTER_USER_API = API_SERVICES.URL_HOST_API + configs.REGISTER_API;

// REGISTER
const registerEpic = action$ => action$.pipe(
    ofType(REGISTER.ADD),
    mergeMap((action) => {
        console.log('REGISTER API', REGISTER_USER_API);
        console.log('PAYLOAD:', action.payload);
        return ajax.post(REGISTER_USER_API, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => registerSuccessAction(response)),
            catchError(error => of(registerFailureAction(error)))
        );
    })
);

export { registerEpic };
