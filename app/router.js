import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('coworkers', function() {
    this.route('coworker', {
      path: 'coworker/:id'
    });
  });
  this.route('about');
  this.route('edziennik');
});

export default Router;
