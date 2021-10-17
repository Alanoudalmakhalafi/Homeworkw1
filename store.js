if( document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)

} else{
    ready()
 }

 function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0 ; i< removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i] 
        button.addEventListener('click', removeCartItem)
    }

    var quntityinputs = document.getElementsByClassName('cart-quntity-input')
    for(var i =0 ; i < quntityinputs.length ; i++){
        var input = quntityinputs[i]
        input.addEventListener('change', quntityChanged )
    }

    var addTocartButtons = document.getElementsByTagName('button')
    for (var i = 0 ; i < addTocartButtons.length ; i++){
       var button = addTocartButtons[i]
       button.addEventListener('click', addTocartClicked)
       
    }
 }

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    console.log("removed")
}

function quntityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value =1
  } 
  updateCartTotal()
}

function addTocartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    console.log(title,price,imageSrc)
    // addItemToCart(title,price,imageSrc) 
}

// function addItemToCart(title,price,imageSrc){
//     var cartRow = document.createElement('div')
//     cartRow.innerText = title
//     var cartitems = document.getElementsByClassName('card')[0]
//     cartitems.append(cartRow)

// }

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0 ; i< cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quntity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quntity = quantityElement.value
        total = total + (price * quntity)
    }
    total = Math.round(total * 100)/100
   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}