var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './images/vmSocks-green-onWhite_preview.jpeg',
    inventory: 25,
    details: ['80% cotton', '20% polyester', 'Fuzz Free'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ]
  }
})