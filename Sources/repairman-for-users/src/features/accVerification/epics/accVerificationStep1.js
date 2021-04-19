import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import {ACCVERIFICATIONSTEP1} from '../actionTypes/accVerificationStep1';
import {
  accVerificationStep1SuccessAction,
  accVerificationStep1FailureAction,
} from '../actions/accVerificationStep1';
import API_SERVICES from '../../../store/services';
const API_UPLOAD_IDIMAGES =
  API_SERVICES.URL_HOST_API + '//uploadIdentityCardImages';
//ACCOUNT VERIFICATION STEP3
const accVerificationStep1Epic = action$ =>
  action$.pipe(
    ofType(ACCVERIFICATIONSTEP1.ADD),
    mergeMap(action => {
      return ajax
        .post(
          API_UPLOAD_IDIMAGES,
          action.payload,
          API_SERVICES.HEADERS(action.payload.authToken),
        )
        .pipe(
          map(response => accVerificationStep1SuccessAction(response)),
          catchError(error =>
            of(
              accVerificationStep1FailureAction({
                message: error.xhr.response,
                status: error.xhr.status,
              }),
            ),
          ),
        );
    }),
  );

export {accVerificationStep1Epic};
