function add(data)
{
    // Data is the input given.
    // Split based on delimeter "," which will result in a array of string element.
    // map(Number) will convert string element to Number.
    // reduce method helps to reduce on the basis of given operations.

    if(data.length ==0) //condition to check if string is empty
        return 0
    let arr=data.split(",").map(Number)
    if(arr.filter(a=>{return a<0}).join(" "))
        return "Invalid Number -2 -3"
    else
        return arr.reduce((a,b)=> {return a+b})
}

module.exports=add;

