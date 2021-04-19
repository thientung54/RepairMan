import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import {ACCVERIFICATIONSTEP2} from '../actionTypes/accVerificationStep2';
import {
  accVerificationStep2SuccessAction,
  accVerificationStep2FailureAction,
} from '../actions/accVerificationStep2';
import API_SERVICES from '../../../store/services';
const API_UPLOAD_DEGREE = API_SERVICES.URL_HOST_API + '/uploadDegree';

//ACCOUNT VERIFICATION STEP3
const accVerificationStep2Epic = action$ =>
  action$.pipe(
    ofType(ACCVERIFICATIONSTEP2.ADD),
    mergeMap(action => {
      return ajax
        .post(API_UPLOAD_DEGREE, action.payload, API_SERVICES.HEADERS())
        .pipe(
          map(response => accVerificationStep2SuccessAction(response)),
          catchError(error =>
            of(
              accVerificationStep2FailureAction({
                message: error.xhr.response,
                status: error.xhr.status,
              }),
            ),
          ),
        );
    }),
  );

export {accVerificationStep2Epic};
