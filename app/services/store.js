import Service from '@ember/service';
import products from '../models/products';
import product from '../models/product';
export default Service.extend({
  getProducts(){
    return [{
        id: 11,
        name:'Cheek',
        isExpanded: false,
        productId : 11,
        product : [{
          id:111,
          name : 'Rooch',
          imagSrc : "image2",
          products: [
            {
              name : 'Lakme',
              imagSrc : "image1",
              price : "300",
              rating : "5"
            },{
              name : 'Loral',
              imagSrc : "image2",
              price : "100",
              rating : "4"
            },{
              name : 'Kajol',
              imagSrc : "image3",
              price : "10",
              rating : "2"
            },{
              name : 'Gucci',
              imagSrc : "image4",
              price : "550",
              rating : "1"
            },{
              name : 'Rooch1',
              imagSrc : "image3",
              price : "10",
              rating : "2"
            },{
              name : 'Rooch2',
              imagSrc : "image4",
              price : "398",
              rating : "3"
            },{
              name : 'Loral1',
              imagSrc : "image3",
              price : "256",
              rating : "0"
            },{
              name : 'Loral2',
              price : "300",
              imagSrc : "image2",
              rating : "2"
            },{
              name : 'Lakeme',
              imagSrc : "image4",
              price : "300",
              rating : "3"
            },{
              name : 'Loral3',
              imagSrc : "image3",
              price : "300",
              rating : "5"
            },{
              name : 'Panteen',
              imagSrc : "image2",
              price : "456",
              rating : "4"
            }
          ]
        },{
          id :112,
          name : 'Glance',
          imagSrc : "image4",
          products: [
            {
              name : 'Lakme',
              imagSrc : "image1",
              price : "300",
              rating : "5"
            },{
              name : 'Loral',
              imagSrc : "image2",
              price : "100",
              rating : "4"
            },{
              name : 'Kajol',
              imagSrc : "image3",
              price : "10",
              rating : "2"
            },{
              name : 'Gucci',
              imagSrc : "image4",
              price : "550",
              rating : "1"
            },{
              name : 'Rooch1',
              imagSrc : "image3",
              price : "10",
              rating : "2"
            },{
              name : 'Rooch2',
              imagSrc : "image4",
              price : "398",
              rating : "3"
            },{
              name : 'Loral1',
              imagSrc : "image3",
              price : "256",
              rating : "0"
            },{
              name : 'Loral2',
              price : "300",
              imagSrc : "image2",
              rating : "2"
            },{
              name : 'Lakeme',
              imagSrc : "image4",
              price : "300",
              rating : "3"
            },{
              name : 'Loral3',
              imagSrc : "image3",
              price : "300",
              rating : "5"
            },{
              name : 'Panteen',
              imagSrc : "image2",
              price : "456",
              rating : "4"
            }
          ]
        }]
      },{id : 12,
        name : 'Face',
        isExpanded : false,
        productId : 11,
        products: [
          {
            name : 'Lakme',
            imagSrc : "image1",
            price : "300",
            rating : "5"
          },{
            name : 'Loral',
            imagSrc : "image2",
            price : "100",
            rating : "4"
          },{
            name : 'Kajol',
            imagSrc : "image3",
            price : "10",
            rating : "2"
          },{
            name : 'Gucci',
            imagSrc : "image4",
            price : "550",
            rating : "1"
          },{
            name : 'Rooch1',
            imagSrc : "image3",
            price : "10",
            rating : "2"
          },{
            name : 'Rooch2',
            imagSrc : "image4",
            price : "398",
            rating : "3"
          },{
            name : 'Loral1',
            imagSrc : "image3",
            price : "256",
            rating : "0"
          },{
            name : 'Loral2',
            price : "300",
            imagSrc : "image2",
            rating : "2"
          },{
            name : 'Lakeme',
            imagSrc : "image4",
            price : "300",
            rating : "3"
          },{
            name : 'Loral3',
            imagSrc : "image3",
            price : "300",
            rating : "5"
          },{
            name : 'Panteen',
            imagSrc : "image2",
            price : "456",
            rating : "4"
          }
        ]
      },{id : 13,
          name : 'Eyes',
          isExpanded : false,
          productId : 11,
          product : [{
            id:131,
            name : 'EyeLiner',
            imagSrc : "image3",
            rating : "2.5"
          },{
            id :132,
            name : 'Kajal',
            imagSrc : "image4",
            rating : "3"
          }]
      },{id : 14,
        name : 'Lips',
        isExpanded : false,
        productId : 12,
        product : [{
          id:141,
          name : 'Gloss',
          imagSrc : "image3",
          rating : "3.5"
        },{
          id :142,
          name : 'Stick',
          imagSrc : "image2",
          rating : "3.5"
        }]
    },{id : 15,
      name : 'Nails',
      isExpanded : false,
      productId : 12,
      product : [{
        id:151,
        name : 'Polish',
        imagSrc : "image1",
        rating : "3"
      },{
        id :152,
        name : 'Remover',
        imagSrc : "image2",
        rating : "4"
      }]
  }];
},
getProductById (id) {
  let product = this.getProductList().product.findBy('id',parseInt(id));
  return [product];
}
});
