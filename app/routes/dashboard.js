import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      coworkers: this.store.queryRecord('coworker', {include: 'kudos'})
    });
  }
});
