import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('food-item');
  },
  deactivate() {
    this.get('controller.model').rollbackAttributes();
  },
  actions: {
    saveEntry() {
      this.get('controller.model').save().then(function(value) {
        Ember.Logger.log("SAVED", value);
      });
      this.transitionTo('food.list');
    }
  }
});
