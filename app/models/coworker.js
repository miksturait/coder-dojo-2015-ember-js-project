import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  kudos: DS.hasMany('kudo'),

  fullName: Ember.computed('fistName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  kudosCollected: Ember.computed('kudos.@each.value', function() {
    return this.get('kudos').reduce(((acc, kudo) => acc + kudo.get('value')), 0);
  })
});
