import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  priority: DS.attr('string'),
  attach: DS.attr('string'),
  user: DS.attr('string')
});
