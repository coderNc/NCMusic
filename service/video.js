import {
  NCRquest
} from './index';

export const getTopMV = (params) => {
  return NCRquest?.get('/top/mv', params);
}

export const getMVDetail = (params) => {
  return NCRquest?.get('/mv/detail', params);
}

export const getMVUrl = (params) => {
  return NCRquest?.get('/mv/url', params);
}

export const getRelatedVideo = (params) => {
  return NCRquest?.get('/related/allvideo', params);
}