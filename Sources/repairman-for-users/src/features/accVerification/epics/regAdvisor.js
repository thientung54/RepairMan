import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import {REGADVISOR} from '../actionTypes/regAdvisor';
import {
  getAllRegAdvisorSuccessAction,
  getAllRegAdvisorFailureAction,
} from '../actions/regAdvisor';
import API_SERVICES from '../../../store/services';
// const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Shop/GetAll';
const API_GETALL = 'https://forhome-proud-grysbok.cfapps.io/getAdvisor';

//REGISTRATION CITY
const regAdvisorEpic = action$ =>
  action$.pipe(
    ofType(REGADVISOR.REGADVISOR_GETALL),
    mergeMap(() => {
      return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
        map(response => getAllRegAdvisorSuccessAction(response)),
        catchError(error =>
          of(
            getAllRegAdvisorFailureAction({
              message: error.xhr.response,
              status: error.xhr.status,
            }),
          ),
        ),
      );
    }),
  );

export {regAdvisorEpic};
