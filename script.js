// add and remove button
let cartQuantity = 0;

function updateCartQuantity(change) {

  if (cartQuantity + change > 5) {
    return alert("The cart is full");
  } else if (cartQuantity + change < 0) {
    return alert("Not enough items in the cart");
  }

  cartQuantity += change
}

// Show cart quantity total price adjusted according to quantity and deletions
let itemPrice = 0;

function updateItemPrice(price) {
  
  if(itemPrice + price < 0) {
    return alert("Purchase an item")
  }
  itemPrice += price
}


// first heart button
let btnHeart = document.getElementById('btnh1')

function Toggle1() {
  if (btnHeart.style.color == 'red') {
    btnHeart.style.color = 'gray'
  } else {
    btnHeart.style.color = '#ff7605'
  }
}


// second heart button
let btnHeart2 = document.getElementById('btnh2')

function Toggle2() {
  if (btnHeart2.style.color == 'red') {
    btnHeart2.style.color = 'gray'
  } else {
    btnHeart2.style.color = '#ff7605'
  }
}


// third heart button
let btnHeart3 = document.getElementById('btnh3')

function Toggle3() {
  if (btnHeart3.style.color == 'red') {
    btnHeart3.style.color = 'gray'
  } else {
    btnHeart3.style.color = '#ff7605'
  }
}


// fourth heart button
let btnHeart4 = document.getElementById('btnh4')

function Toggle4() {
  if (btnHeart4.style.color == 'red') {
    btnHeart4.style.color = 'gray'
  } else {
    btnHeart4.style.color = '#ff7605'
  }
}


// fifth heart button
let btnHeart5 = document.getElementById('btnh5')

function Toggle5() {
  if (btnHeart5.style.color == 'red') {
    btnHeart5.style.color = 'gray'
  } else {
    btnHeart5.style.color = '#ff7605'
  }
}
