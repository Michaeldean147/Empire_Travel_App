import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', {path: "/search"}, function() {
    this.route('show', {path: "/:planet_id"});
  });
});

export default Router;
