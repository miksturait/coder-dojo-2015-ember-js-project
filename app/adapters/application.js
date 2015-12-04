import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: 'https://coder-dojo-merit-money-api.herokuapp.com'
});
