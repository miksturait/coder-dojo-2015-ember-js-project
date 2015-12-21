import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  url: 'http://piotrs.cba.pl/Angular_JS/ajax/getdate.php',
  findAll() {
    return this.ajax(this.url, 'GET');
  }
});
