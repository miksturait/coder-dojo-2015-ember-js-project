import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://coder-dojo-merit-money-api.herokuapp.com',
  namespace: 'api/v1'
});
