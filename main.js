


function evenOrOdd() {
    let number = document.querySelector("#num").value;
    if (number % 2 == 0) {
        document.querySelector("#oddEven").innerHTML = "Even";
    }
    else document.querySelector("#oddEven").innerHTML = "Odd";
}


function prime(){
    let isPrime = true;
    let number = document.querySelector("#num").value;
    if (number === 1) {
        document.querySelector("#isPrime").innerHTML = "Not Prime Number";
    }
    
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
    
        if (isPrime) {
            document.querySelector("#isPrime").innerHTML = "Prime Number";
        } else {
            document.querySelector("#isPrime").innerHTML = "Not Prime Number";
        }
    }

    else {
        document.querySelector("#isPrime").innerHTML = "Not Prime Number";
    }
}