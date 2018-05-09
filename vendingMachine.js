
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },
  
  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
