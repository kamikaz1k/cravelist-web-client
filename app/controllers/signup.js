import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    signup() {
      let username = this.get('model.username'), password = this.get('model.password');
      console.log("creds", username, password);
      if (!username || !password) {
        return;
      }
      // Signup with form data
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      }).then(response => {

        if (!response.ok) {
          return response.json();
        }

        this.get('session').authenticate(
          'authenticator:oauth2',
          username,
          password
        )
      }).then(error => {
        if (error) {
          this.set('model.errorMessage', error.error);
        }
      }).catch(e => this.set('model.errorMessage', e));
      // If successful, session authenticate
      // Otherwise, patch error
    }
  }
});
