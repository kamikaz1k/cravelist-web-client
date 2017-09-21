import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').find('food-item', params.foodId);
    },

    setupController(controller, model) {
      this._super(controller, model);
      if (model.get('location.name')) {
        model.set('restaurantName', model.get('location.name'));
      }
    },

    deactivate() {
      this.get('controller.model').rollbackAttributes();
    }
});
