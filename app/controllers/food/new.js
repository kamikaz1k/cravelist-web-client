import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    done() {
      // debugger;
    },

    selectLocation(location) {
      this.set('model.location', {
        name: location.name,
        address: location.formatted_address,
        placeId: location.place_id,
        googleMapsURL: location.url,
        coordinates: [
          location.geometry.location.lng(),
          location.geometry.location.lat()
        ]
      });
    }

  }
});
