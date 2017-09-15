import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  address: attr('string'),
  placeId: attr('string'),
  googleMapsURL: attr('string'),
  lat: attr('string'),
  lng: attr('string')
});
