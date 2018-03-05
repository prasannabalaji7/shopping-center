import Component from '@ember/component';

export default Component.extend({
  hideChild: true,
  actions : {
    onClick :function(item){
      this.toggleProperty('hideChild')
    }
  }
});
