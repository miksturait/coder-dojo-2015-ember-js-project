import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      coworkers: this.store.queryRecord('coworker', {include: 'kudos'})
    });
  },
  afterModel(model, transition) {
    if (model.coworkers) {
      this.transitionTo('dashboard.index.coworker', model.coworkers.get('firstObject'));
    }
  }
});
