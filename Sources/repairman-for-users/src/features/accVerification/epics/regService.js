import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { REGSERVICE } from '../actionTypes/regService';
import { getAllRegServiceSuccessAction, getAllRegServiceFailureAction } from '../actions/regService';
import API_SERVICES from '../../../store/services';

//const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Shop/GetAll';
const API_GETALL = 'https://forhome-proud-grysbok.cfapps.io/getServices';

//REGISTRATION SERVICE
const regServiceEpic = action$ => action$.pipe(
    ofType(REGSERVICE.REGSERVICE_GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map((response) => getAllRegServiceSuccessAction(response)),
            catchError(error => of(getAllRegServiceFailureAction({
                message: error.xhr.response, status: error.xhr.status,
            })))
        );
    })
);

export { regServiceEpic };