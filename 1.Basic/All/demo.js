const num = [11, 22, 44, 55, 66, 77, 88];

function odd(number) {
  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      console.log(i, number[i]);
    }
  }
}

odd(num);
