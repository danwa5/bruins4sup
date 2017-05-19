import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'http://127.0.0.1:3000'
  // namespace: '/api/v1'

  // isSuccess(status, headers, payload ) {
  //   let isSuccess = this._super(...arguments);
  //   if (isSuccess && payload.status) {
  //     // when status === 200 and payload has status property,
  //     // check that payload.status is also considered a success request
  //     return this._super(payload.status);
  //   }
  //   return isSuccess;
  // }
});
