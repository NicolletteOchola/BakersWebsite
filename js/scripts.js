var price, cakeSize, cakeFlavour;
let total = 0;
function GetOrder(flavour, size, baker, total) {
  this.flavour = flavour;
  this.size = size;
  this.baker = baker;
  this.total = total;
}

$(document).ready(function ()) {
  let flavour = $(".flavour option:selected").val();
  let csize = $("#size option:selected").val();
  let cbaker = $("#baker option:selected").val();

  switch (csize) {
    case "0":
      price = 0;
      break;
    case "1kg":
      price = 2000;
    case "2kg":
      price = 3000;
    case "3kg":
      price = 4000;
  }

  switch (flavour) {
    case "0":
      price = 0;
    case "Blackforest":
      price = 400;
    case "Banana":
      price = 200;
    case "Chocolate":
      price = 800;
    case "Carrot":
      price = 200;
    case "SaltedCaramel":
      price = 400;
    case "ChocolateFudge":
      price = 1000;
    case "RedVelevet":
      price = 1000;
  }

if ((csize == 0) && (flavour == 0)) {
  alert("Please select a Cake flavour and Size.")
}
else {
  return 0;
}

total = price + cakeSize + cakeFlavour
console.log(total);
let checkoutTotal = 0;
checkoutTotal = checkoutTotal + total;

$(""(".flavour option:selected").val()

