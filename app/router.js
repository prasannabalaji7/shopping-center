import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/',{path:'/products'});
  this.route('products',function(){
    this.route('product',{path:'/:product_id'});
  });
});

export default Router;
