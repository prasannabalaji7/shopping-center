import Route from '@ember/routing/route';

export default Route.extend({
  store : Ember.inject.service(),
  toggleSide: true,
  checkboxValue : "",
  greenChecked : false,
  model (params){
    const store = this.get('store');
    return Ember.RSVP.hash({
      productList:store.getProducts(),
      checkboxModel : [
            { title: "Under $50", id :"50",checked: false },
            { title: "$50  - $200",id :"200", checked: false },
            { title: "above $300",id :"300", checked: false },
        ]
    });
  },
  actions : {
    onClick :function(item){
      this.toggleProperty('toggleSide')
    },toggleGreen : function(model,item){
    //  model.checkboxModel.filterBy('id',item).toggleProperty('checked');
      this.set('checkboxValue',item);
    },actionHome (){
      this.transitionTo('products');
    }
  }
});
