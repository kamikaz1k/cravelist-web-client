import Ember from 'ember';

export default Ember.Controller.extend({

  foodList: Ember.computed('model', 'model.search', function () {
    // If search is empty, just return model
    if (!this.get('model.search')) {
      return this.get('model');
    }

    else {
      return this.get('model').filter(v =>
        contains(v.get('name'), this.get('model.search')) || contains(v.get('location.name'), this.get('model.search'))
      );
    }
  })

});

// Case insensitive
function contains(str, val) {
  return str.toLowerCase().indexOf(val.toLowerCase()) > -1;
}