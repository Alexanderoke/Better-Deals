let computer1 = {
  color: "black",
  brand: "Mac",
  price: 500,
  shop: "A",
  processor: "corei7"
}

let computer2 = {
  color: "red",
  brand: "Mac",
  price: 300,
  shop: "B",
  processor: "corei7"
}

let computer3 = {
  color: "grey",
  brand: "Mac",
  price: 250,
  shop: "c",
  processor: "corei7"
}

let computers=[
  computer1,
  computer2,
  computer3
]

let cheapestComp;

function search(){
  var cheap= document.getElementById("search").value;
  let sortedArray = (computers.sort((a,b) => a.price - b.price));


  console.log(sortedArray)

  // console.log(cheapestComp);
let bestDeal = sortedArray[0];
console.log(bestDeal);
// bestDeal.forEach((element) => {
//   console.log(element.shop)
// });
// let sth = bestDeal.findIndex(Object.is.bind(null, undefined))
alert("The cheapest computer is "+"in"+" "+"shop"+" " + bestDeal.shop)
alert(`The cheapest computer is in shop ${bestDeal.shop}`)

$("#details").append(`
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brand</th>
      <th scope="col">Price</th>
      <th scope="col">Shop</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${bestDeal.brand}</td>
      <td>${bestDeal.price}</td>
      <td>${bestDeal.shop}</td>
    </tr>
    
  </tbody>
</table>
`)


// document.getElementById("cheapest").innerHTML = bestDeal.price;
// document.getElementById("shop").innerHTML = bestDeal.shop;
};

