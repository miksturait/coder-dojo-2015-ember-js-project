import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    include: {
      refreshModel: true
    },
    name: {},
    order: {}
  },

  model(params) {
    return Ember.RSVP.hash({
      coworkers: this.store.queryRecord('coworker', params)
    });
  },

  actions: {
    reload() {
      this.transitionTo('dashboard');
      this.refresh();
    }
  }
})
;
