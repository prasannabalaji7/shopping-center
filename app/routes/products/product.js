import Route from '@ember/routing/route';

export default Route.extend({
  store : Ember.inject.service(),
  toggleSide: true,
  greenChecked : false,
  model (params){
    console.log(params);
  }
});
