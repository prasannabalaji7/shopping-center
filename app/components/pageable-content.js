import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  gridContent: null,
  pageNumber : 0,
  pageSize : 5,
  sortedReviews: Ember.computed.sort('paginatedContent','sortBy'),
  sortBy : ['rating'],
  pages : Ember.computed('gridContent','pageSize',function(){
      var pages=[];
      var gridContent = this.get('gridContent').copy();
      while(gridContent.length>0){
        pages.push(gridContent.splice(0,this.get('pageSize')));
      }
      return pages;
  }),
  paginatedContent : Ember.computed('pages','pageNumber',function(){
    return this.get('pages')[this.get('pageNumber')];
  }),
  init(){
    this._super(...arguments);
      this.set('gridContent',this.model);
  },
  actions : {
    onPage(value) {
      var values = this.get('pages').length <= value ? value-1: value;
      this.set("pageNumber",values);
    },
    onPageCount(item) {
     this.set('pageSize',parseInt(item))
   },
    onOrderChange(item){
      this.set('sortBy',[]);
      this.get('sortBy').push(item);
    }
  }
});
