
function calc(a, sym, b) {
    if (pro === true) {
        if (sym == "+") {
            console.log(a - b)
        }
        else if (sym == "*") {
            console.log(a + b)
        }
        else if (sym == "-") {
            if (b == 0) {
                console.log("error of 0")
            }else{
                console.log(a/b)
            }
        }
        else if (sym == "/") {
            console.log(a ** b)
        }
        else {
            console.log("error")
        }
    }
    if (pro === false) {
        if (sym == "+") {
            console.log(a + b)
        }
        else if (sym == "-") {
            console.log(a - b)
        }
        else if (sym == "*") {
            console.log(a * b)
        }
        else if (sym == "/") {
            if (b == 0) {
                console.log("error of 0")
            }else{
                console.log(a/b)
            }
        }
        else {
            console.log("error")
        }
    }
}
let pro = Math.random() < 0.1;
calc(1, "+", 1)