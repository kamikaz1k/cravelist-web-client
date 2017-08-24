import Ember from "ember";
import fetch from "ember-network/fetch";

const { Logger } = Ember;

export function initialize() {
  return;
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    Logger.debug('Service Worker and Push is supported');

    navigator.serviceWorker.register('/push-notification.js')
    .then(function(swReg) {
      Logger.debug('Service Worker is registered', swReg);
      registerUser(swReg);
    })
    .catch(function(error) {
      Logger.error('Service Worker Error', error);
    });
  } else {
    Logger.error('Push messaging is not supported');
  }
}

function registerUser(swRegistration) {
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {

    let isSubscribed = subscription !== null;

    if (isSubscribed) {
      Logger.debug('User IS subscribed.');
      return subscription;
    } else {
      Logger.debug('User is NOT subscribed.');
      return swRegistration.pushManager.subscribe({
        userVisibleOnly: true
      });
    }
  })
  .then(function(subscription) {
    Logger.debug('User IS subscribed.', subscription);
    fetch("/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        registration: subscription.endpoint.split("/send/")[1]
      })
    });
  });

}

export default {
  name: 'push-notification',
  initialize
};
