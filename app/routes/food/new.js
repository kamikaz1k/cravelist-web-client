import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('food-item');
  },
  deactivate() {
    this.get('controller.model').rollbackAttributes();
  }
});
