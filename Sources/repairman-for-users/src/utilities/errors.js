import {translate} from '../locale/index';
export const TransferError = param => {
  let message;
  switch (param) {
    case 401:
      message = translate('common.error401GetAPI');
      break;
    case 403:
      message = translate('common.error403GetAPI');
      break;
    case 500:
      message = translate('common.error500GetAPI');
      break;
  }
  return message;
};
