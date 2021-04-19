import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import {ACCVERIFICATIONSTEP3} from '../actionTypes/accVerificationStep3';
import {
  accVerificationStep3SuccessAction,
  accVerificationStep3FailureAction,
} from '../actions/accVerificationStep3';
import API_SERVICES from '../../../store/services';
const API_ADD_BASICINFORM =
  API_SERVICES.URL_HOST_API + '/verifyBasicInformation';

//ACCOUNT VERIFICATION STEP3
const accVerificationStep3Epic = action$ =>
  action$.pipe(
    ofType(ACCVERIFICATIONSTEP3.ADD),
    mergeMap(action => {
      return ajax
        .post(API_ADD_BASICINFORM, action.payload, API_SERVICES.HEADERS())
        .pipe(
          map(response => accVerificationStep3SuccessAction(response)),
          catchError(error =>
            of(
              accVerificationStep3FailureAction({
                message: error.xhr.response,
                status: error.xhr.status,
              }),
            ),
          ),
        );
    }),
  );

export {accVerificationStep3Epic};
