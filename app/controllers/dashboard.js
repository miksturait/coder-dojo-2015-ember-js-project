import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name', 'order'],
  include: 'kudos',
});
