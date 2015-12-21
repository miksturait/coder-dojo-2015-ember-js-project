import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  comment: DS.attr('string'),
  coworker: DS.belongsTo('coworker')
});
