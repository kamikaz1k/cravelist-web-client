import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('food', function() {
    this.route('list');
    this.route('detail', { path: '/detail/:foodId' });
    this.route('new');
  });
  this.route('login');
  this.route('logout');
  this.route('signup');
});

export default Router;
