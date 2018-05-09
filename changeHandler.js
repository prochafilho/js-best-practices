var balanceManager = require('./balanceManager');
var coins = {
      p: 1,
      n: 5,
      d: 10,
      q: 25
    };


module.exports = {
  
  getAmount: function(coinType) {
    
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    

    var amount = coins[coinType];

    if (typeof amount === "undefined") {
      throw new Error('Unrecognized coin ' + coinType);
    } else {
      return amount;
    }
  },
  convertToChange: function(amount) {
    
    var change = [];
    if (amount === 0) { return change; }
    Object.keys(coins).reverse().forEach(v => {
      while (coins[v] <= amount) {
        change.push(v)
        amount -= coins[v]
      }
    }) 
    return change;
  }
};
