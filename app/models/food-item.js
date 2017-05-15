import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  location: attr('string'),
  eaten: attr('boolean', { defaultValue: false }),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  }),
  modifiedAt: attr('date')
});
