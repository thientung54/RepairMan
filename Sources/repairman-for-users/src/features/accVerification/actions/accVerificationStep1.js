import { createAction } from 'redux-actions';
import { ACCVERIFICATIONSTEP1 } from '../actionTypes/accVerificationStep1';

export const accVerificationStep1Action = createAction(ACCVERIFICATIONSTEP1.ADD);
export const accVerificationStep1SuccessAction = createAction(ACCVERIFICATIONSTEP1.ADD_SUCCESS);
export const accVerificationStep1FailureAction = createAction(ACCVERIFICATIONSTEP1.ADD_FAILURE);
