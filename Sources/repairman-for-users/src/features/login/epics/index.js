/* eslint-disable prettier/prettier */
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { LOGIN } from '../actionTypes/index';
import { loginSuccessAction, loginFailureAction } from '../actions/index';
import API_SERVICES from '../../../store/services';

const API_LOGIN = API_SERVICES.URL_HOST_API + '/loginUser';

//LOGIN
const loginEpic = action$ => action$.pipe(
    ofType(LOGIN.AUTH),
    mergeMap((action) => {
        return ajax.post(API_LOGIN, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => loginSuccessAction(response)),
            catchError(error => of(loginFailureAction({
                message: error.xhr.response, status: error.xhr.status,
            })))
        );
    })
);

export { loginEpic };
