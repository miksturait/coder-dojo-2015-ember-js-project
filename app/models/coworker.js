import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatarUrl: DS.attr('string'),

  kudos: DS.hasMany('kudo', {async: true}),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  nickname: Ember.computed('email', function() {
    return this.get('email').split('@')[0];
  })
});
