const arrayOfNumbers = [21,63,789,14,52,963,4512,789,3,65,1];

const findGreaterNumber = (array) => {
    let greaterNumber = array[0];

    array.map((n) => {
      greaterNumber =  n > greaterNumber ?  n : greaterNumber;
    });
    console.log('the greater numbner is :',greaterNumber);
}

findGreaterNumber(arrayOfNumbers);