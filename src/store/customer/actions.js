/**
 * Created by qianqing on 2017/2/4.
 */
import Vue from 'vue';
import * as type from './type';

export default {
  [type.GET_CUSTOMER_INFO] ({commit, state}) {
    return new Promise((resolve, reject) => {
      Vue.$http('/url', {})
        .then(data => {
          commit(type.UPDATE_CUSTOMER_INFO, data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
