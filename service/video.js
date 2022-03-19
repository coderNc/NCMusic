import {
  NCRquest
} from './index';

export const getTopMV = (params) => {
  return NCRquest?.get('/top/mv', params);
}