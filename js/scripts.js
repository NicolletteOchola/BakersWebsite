var price, 1kgprice, 2kgprice;
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
      price = 2400;
    case "2kg":
      price = 3200;
    case "3kg":
      price = 5000;
  }

  switch (flavour) {
    case "0":
      price = 0;
    case ""
  }
}

