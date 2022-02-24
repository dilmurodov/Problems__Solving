// Exercise - 5.1

while (true) {

    const ballDelphins = prompt("Enter Delphins mark: ").split(',')
    const ballKoala = prompt("Enter Koala mark: ").split(",")

    const calcAverag = (array, ...args) => {
        console.log(array)
        return array.reduce((x, y) => (+x + +y), 0) / array.length
    }

    const avgDolphins = calcAverag(ballDelphins)
    const avgKoalas = calcAverag(ballKoala)
    console.log(avgDolphins, avgKoalas)

    const checkWinner = (avgDolphins, avgKoalas) => {

        return (avgDolphins / 2 > avgKoalas) ? `Delfinlar g'alaba qozondi(${avgDolphins} > ${avgKoalas})` : ((avgKoalas / 2 > avgDolphins) ? `Kualalar g'alaba qozondi( ${avgDolphins} >  ${avgKoalas})` : `Hechkim g'alaba qozonmadi ${avgDolphins} ${avgKoalas}`)
    }
    
    alert(checkWinner(avgDolphins, avgKoalas))
    
    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}


// Exercise - 5.2

while (true) {
    const expression = prompt("Enter your problem: ").split("")

    const calculator = function (num1, num2, operator) {
        switch (operator) {
            case "%": return `${num1} % ${num2} = ${+num1 % +num2}`
            case "/": return `${num1} / ${num2} = ${+num1 / +num2}`
            case "+": return `${num1} + ${num2} = ${+num1 + +num2}`
            case "-": return `${num1} - ${num2} = ${+num1 - +num2}`
            default: return "Aniqlanmagan ishora!";
        }
    };

    alert(calculator(expression[0], expression[2], expression[1]))
    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}


// Expression - 6.1

while (true) {

    const num1 = prompt("Enter first number:")
    const num2 = prompt("Enter second number:")
    const num3 = prompt("Enter third number:")

    alert(`Eng katta son: ${taqqoslash(num1, num2, num3)}`);

    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}

function taqqoslash(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) return num1
        else return num3
    }
    else {
        if (num2 > num3) return num2
        else return num3
    }
}

// Exercise - 6.2

while (true) {

    const num1 = prompt("Enter first number:")
    const num2 = prompt("Enter second number:")
    const num3 = prompt("Enter third number:")

    alert(`Eng katta son: ${taqqoslash(num1, num2, num3)[0]}\nEng kichik son: ${taqqoslash(num1, num2, num3)[1]}`);
    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}

function taqqoslash(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) return new Array(num1, num2 > num3 ? num3 : num2)
        else return new Array(num3, num2)
    }
    else {
        if (num2 > num3) return new Array(num2, num1 > num3 ? num3 : num1)
        else return new Array(num3, num1)
    }
}

// Exercise - 6.3

while (true) {

    const num1 = prompt("Enter first number: ")
    const num2 = prompt("Enter second number: ")

    const swap = (num1, num2) => {
        let temp = num2;
        num2 = num1;
        num1 = temp;

        return `Number1: ${num1}, Number2: ${num2}`
    }

    alert(swap(num1, num2))

    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}

// Exercise - 6.4

while (true) {

    const userX = +prompt("Enter for number x: ")
    
    const MyFunc = (x) => x**5 + 8*(x**4) - 5*(x**3) + 3*(x**2) + x - 12
    alert(MyFunc(userX))
 

    if (!confirm("Are you want to Continue ?")) {
        break;
    }
}