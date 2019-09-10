window.validation = {
  valid: (number) => {
    const arrayReverseOfNumber = number.toString().split('').reverse();
    let arrayToSum = [];
    
    arrayReverseOfNumber.forEach((e, i) => {
      if(i % 2 !== 0) {
        let numPar = e * 2;
        if(numPar >= 10) {          
          arrayToSum.push(
            numPar.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))
          );
        } else {
          arrayToSum.push(numPar);
        }
      } else {
        arrayToSum.push(parseInt(e));
      }
    });

    const totalSum = arrayToSum.reduce((a, b) => a + b);
    if(totalSum % 10 === 0) {
      return true
    } else {
      return false
    }

  }
};

