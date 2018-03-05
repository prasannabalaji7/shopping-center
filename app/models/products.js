import DS from 'ember-data';

export default DS.Model.extend({
//id : DS.attr('number'),
name: DS.attr('string'),
product: DS.hasMany('product')
});
