export default function() {

  this.namespace = 'api';
    this.timing = 400;  // simulate network delay
    //collection of data
    this.get('/products', function(db, request) {
      return {
        data: db.posts.map(attrs => (
          {type: 'products', id: attrs.id, attributes: attrs }
        ))
      };
    })
    this.get('product/:id');
}
