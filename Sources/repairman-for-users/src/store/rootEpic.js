/* eslint-disable prettier/prettier */
import { combineEpics } from 'redux-observable';
import { registerEpic } from '../features/signup/epics/registerUser';
import { checkPhoneNumberEpic } from '../features/signup/epics/checkPhoneNumber';
import { sendOtpEpic } from '../components/otp/epics/sendOtp';
import { reSendOtpEpic } from '../components/otp/epics/reSendOtp';
import { loginEpic } from '../features/login/epics/index';
import { accVerificationStep1Epic } from '../features/accVerification/epics/accVerificationStep1';
import { accVerificationStep2Epic } from '../features/accVerification/epics/accVerificationStep2';
import { accVerificationStep3Epic } from '../features/accVerification/epics/accVerificationStep3';
import { regAdvisorEpic } from '../features/accVerification/epics/regAdvisor';
import { regServiceEpic } from '../features/accVerification/epics/regService';

const rootEpic = combineEpics(
    registerEpic,
    checkPhoneNumberEpic,
    sendOtpEpic,
    reSendOtpEpic,
    loginEpic,
    accVerificationStep1Epic,
    accVerificationStep2Epic,
    accVerificationStep3Epic,
    regAdvisorEpic,
    regServiceEpic,
);
export default rootEpic;
