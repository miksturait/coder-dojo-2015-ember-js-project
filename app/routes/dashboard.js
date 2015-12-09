import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    include: {
      refreshModel: true
    }
  },
  model(params) {
    return Ember.RSVP.hash({
      coworkers: this.store.queryRecord('coworker', params)
    });
  },
  redirect(model, transition) {
    if (model.coworkers) {
      this.transitionTo('dashboard.coworker', model.coworkers.get('firstObject'));
    }
  }
});
