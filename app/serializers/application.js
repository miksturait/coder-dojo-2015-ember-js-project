import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // copied from http://emberigniter.com/modern-bridge-ember-and-rails-5-with-json-api/
  // rails does not support JSONAPI deserialization

  serialize() {
    const result = this._super(...arguments),
      attr = result.data.attributes,
      rel = result.data.relationships;

    return Object.keys(rel).reduce(function(acc, elem) {
      const data = rel[elem].data;
      if (data) {
        acc[elem + "_id"] = data.id;
      }
      if (data && data.type) {
        acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
      }
      return acc;
    }, attr);
  }
});
