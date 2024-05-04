function add(data)
{
    // Sata is the input given.
    // Split based on delimeter "," which will result in a array of string element.
    // map(Number) will convert string element to Number.
    // reduce method helps to reduce on the basis of given operations.

    return data.split(",").map(Number).reduce((a,b)=> {return a+b})
}

module.exports=add;

