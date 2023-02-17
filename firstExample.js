let num = 1

if (true) {
    //we got reference error here
    //however we expect that console.log(num) should log 1
    //but num is hoisted again in top of this scope
    //for let and const we don't have initialisation with any value (even undefined) during hoisting
    //so we can't access the variable until num is declared or assigned
    console.log(num)
    let num = 2
}

console.log(num)
