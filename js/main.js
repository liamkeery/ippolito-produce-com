console.log('Connected!');

document
  .getElementById('product-select')
  .addEventListener('change', function () {
    'use strict';
    var vis = document.querySelector('.vis'),   
      target = document.getElementById(this.value);
    if (vis !== null) {
      vis.className = 'inv';
    }
    if (target !== null ) {
      target.className = 'vis';
    }
});

$(document).ready(function(){
  $('.toast').toast('show');
});

