import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('dashboard', function () {
    this.route('coworker', {path: 'coworker/:id'}, function() {
      this.route('kudo-new');
    });
  });
  this.route('about');
});

export default Router;
