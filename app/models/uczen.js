import DS from 'ember-data';

export default DS.Model.extend({
  databaseId: DS.attr('number'),
  name: DS.attr('string'),
  oceny: DS.attr('string'),
  obecny: DS.attr('boolean')
});
