function renderTemplate (fruit) {
  var template = `<tr>
    <td class="item"><h2>${fruit.name}</h2></td>
    <td><h2>&#8377; ${fruit.price}</h2></td>
    <td><h2 id="display${fruit.name}price">&#8377; ${fruit.totalPrice}</h2></td>
    <td style="text-align: center">
        <button class="btn" id="add${fruit.name}">Add</button>
        <h2 id="numberof${fruit.name}"></h2>
        <button class="btn" id="remove${fruit.name}" style="display: none;">Subtract</button>
    </td>
  </tr>`;
  return template;
}

var fruits = [
  {
    name: `Apple`,
    price: 60,
    totalPrice: 0,
    numberOfItems: 0
  },
  {
    name: `Banana`,
    price: 30,
    totalPrice: 0,
    numberOfItems: 0
  },
  {
    name: `Watermelon`,
    price: 100,
    totalPrice: 0,
    numberOfItems: 0
  },
  {
    name: `Orange`,
    price: 70,
    totalPrice: 0,
    numberOfItems: 0
  }
];

$(document).ready(function () {
  $.each(fruits, function (i, v) {
    console.log(fruits);
    var html = renderTemplate(v);
    jQuery('#table').append(html);
    jQuery(`#add${v.name}`).on('click', function () {
      v.numberOfItems++;
      v.totalPrice = v.price * v.numberOfItems;
      jQuery(`#numberof${v.name}`).html(v.numberOfItems);
      jQuery(`#display${v.name}price`).html(v.totalPrice);
      if(v.numberOfItems != 0) {
        jQuery(`#remove${v.name}`).css({
          'display': 'block',
          'margin-left': '120px'
        });
      }
    });
    jQuery(`#remove${v.name}`).on('click', function () {
      v.numberOfItems--;
      v.totalPrice = v.price * v.numberOfItems;
      jQuery(`#numberof${v.name}`).html(v.numberOfItems);
      jQuery(`#display${v.name}price`).html(v.totalPrice);
      if(v.numberOfItems == 0) {
        jQuery(`#remove${v.name}`).css({
          'display': 'none'
        });
      }
    });

});
});
