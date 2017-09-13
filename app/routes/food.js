import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
	AuthenticatedRouteMixin,
	{
  actions: {
    saveEntry(model) {
      model.save().then(function(value) {
        Ember.Logger.log("SAVED", value);
      });
      this.transitionTo('food.list');
    }
  }
});
