import Route from '@ember/routing/route';

export default Route.extend({
  model(param){
    console.log(param);
  },
  actions: {
    authMe(){
        this.transitionTo('products');
    }
  }
});
