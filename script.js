// add and remove button
let cartQuantity = 0;

function updateCartQuantity(change) {

  if (cartQuantity + change < 0) {
    return alert("Not enough items in the cart");
  }

  cartQuantity += change

  document.querySelector('#quantity').innerText = `Cart Quantity:  ${cartQuantity}`
}

// Show cart quantity total price adjusted according to quantity and deletions
let itemPrice = 0;

function updateItemPrice(price) {
  
  if(itemPrice + price < 0) {
    return alert("Purchase an item")
  }
  itemPrice += price
  document.querySelector('#amount').innerText = `Item Amount: $${itemPrice}`

}


// first heart button
let btnHeart = document.getElementById('btnh1')
let color = '#ff7605'
let isLiked = false

function Toggle1() {
  isLiked = !isLiked
  btnHeart.style.color = isLiked ? '#ff7605':'grey'
}

// second heart button
let btnHeart2 = document.getElementById('btnh2')
let color2 = '#ff7605'
let isLiked2 = false

function Toggle2() {
  isLiked2 = !isLiked2
  btnHeart2.style.color = isLiked2 ? '#ff7605':'grey'
}


// third heart button
let btnHeart3 = document.getElementById('btnh3')
let color3 = '#ff7605'
let isLiked3 = false

function Toggle3() {
  isLiked3 = !isLiked3
  btnHeart3.style.color = isLiked3 ? '#ff7605':'grey'
}


// fourth heart button
let btnHeart4 = document.getElementById('btnh4')
let color4 = '#ff7605'
let isLiked4 = false

function Toggle4() {
  isLiked4 = !isLiked4
  btnHeart4.style.color = isLiked4 ? '#ff7605':'grey'
}


// fifth heart button
let btnHeart5 = document.getElementById('btnh5')
let color5 = '#ff7605'
let isLiked5 = false

function Toggle5() {
isLiked5 = !isLiked5
btnHeart5.style.color = isLiked5 ? '#ff7605':'grey'
}
