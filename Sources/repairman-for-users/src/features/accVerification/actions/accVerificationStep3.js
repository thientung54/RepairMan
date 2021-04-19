import { createAction } from 'redux-actions';
import { ACCVERIFICATIONSTEP3 } from '../actionTypes/accVerificationStep3';

export const accVerificationStep3Action = createAction(ACCVERIFICATIONSTEP3.ADD);
export const accVerificationStep3SuccessAction = createAction(ACCVERIFICATIONSTEP3.ADD_SUCCESS);
export const accVerificationStep3FailureAction = createAction(ACCVERIFICATIONSTEP3.ADD_FAILURE);
