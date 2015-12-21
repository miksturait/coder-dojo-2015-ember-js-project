import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized.split(/,\s?/);
  },

  serialize(deserialized) {
    return deserialized.join(',');
  }
});
