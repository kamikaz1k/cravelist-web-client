import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  location: attr(),
  eaten: attr('boolean', { defaultValue: false }),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  }),
  modifiedAt: attr('date')
});
