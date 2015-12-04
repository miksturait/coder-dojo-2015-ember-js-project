import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      coworkers: this.store.findAll('coworker'),
      kudos: this.store.findAll('kudo')
    });
  }
});
