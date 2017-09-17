import Ember from 'ember';
import fetch from "ember-network/fetch";

export default Ember.Route.extend({

  model() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    }
  }

});
