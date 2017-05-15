import Ember from "ember";

const { Logger } = Ember;

export function initialize() {
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
  });

}

export default {
  name: 'push-notification',
  initialize
};
