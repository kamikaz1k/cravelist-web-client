import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveEntry(model) {
      model.save().then(function(value) {
        Ember.Logger.log("SAVED", value);
      });
      this.transitionTo('food.list');
    }
  }
});
