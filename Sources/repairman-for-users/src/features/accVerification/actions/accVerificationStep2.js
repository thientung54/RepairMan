import { createAction } from 'redux-actions';
import { ACCVERIFICATIONSTEP2 } from '../actionTypes/accVerificationStep2';

export const accVerificationStep2Action = createAction(ACCVERIFICATIONSTEP2.ADD);
export const accVerificationStep2SuccessAction = createAction(ACCVERIFICATIONSTEP2.ADD_SUCCESS);
export const accVerificationStep2FailureAction = createAction(ACCVERIFICATIONSTEP2.ADD_FAILURE);
