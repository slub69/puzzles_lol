function fib(p1, p2){
    if(p1===0){
        console.log(0)
    } else if(p1&p2===1){
        console.log(1)
    }
    p3 = p1 + p2
    console.log(p3)
    return fib(p2, p3)
}
console.log(fib(0,1))