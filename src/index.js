module.exports = function reverse (n) {
    let x = '';
    let y = n.toString();
    let t = y.length - 1;
    for(let i = 0; i < y.length; i++ ){
      
      if(y[i] === '-'){
      	x = `${''}${x}`;
      	
      } else if (y[i] !== '-') {
      		x = `${y[i]}${x}`;
      }
      t = t - 1;
    }
    return Number(x);
  }
