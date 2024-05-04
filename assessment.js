function add(data) {
  // // Data is the input given.
  // // Split based on delimeter "," which will result in a array of string element.
  // // map(Number) will convert string element to Number.
  // // reduce method helps to reduce on the basis of given operations.

  // if(data.length ==0) //condition to check if string is empty
  //     return 0
  // let arr=data.split(",").map(Number)
  // if(arr.filter(a=>{return a<0}).join(" "))
  //     return "Invalid Number -2 -3"
  // else
  //     return arr.reduce((a,b)=> {return a+b})

  if (data.length == 0) return 0;

  if (Number.isInteger(Number(data[data.length - 1]))) {
    if (data.endsWith("\n")) {
      return "Invalid Input";
    }
    let arr = data.match(/-?\d+/g).map(Number);
    let negNumArr = arr
      .filter((a) => {
        return a < 0;
      })
      .join(" ");

    if (negNumArr) return `Negative number not allowed ${negNumArr}`;
    else
      return arr.reduce((a, b) => {
        return a + b;
      });
  } else {
    return "Invalid Input";
  }
}

module.exports = add;
