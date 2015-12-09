import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['include'],
  include: 'kudos',
  actions: {
    setParams() {
      let newInclude = this.get('includeCollection');
      this.set('include', newInclude);
      this.set('includeCollection', '');
    }
  }
});
