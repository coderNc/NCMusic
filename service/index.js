import {
  BASE_URL
} from './config';

class Request {
  request(url, method, data, header) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data,
        success: (res) => {
          if(res?.statusCode === 200 && res?.data){
            resolve(res?.data)
          } else {
            reject(res?.errMsg)
          }
          
        },
        fail: (err) => {
          reject(err);
        }
      })
    })
  }

  get(url, params, header) {
    return this.request(url, 'GET', params, header);
  }

  post(url, data, header) {
    return this.request(url, 'POST', data, header);
  }

}

export const NCRquest = new Request();
