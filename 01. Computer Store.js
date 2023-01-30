function computerStore(arr) {
    let sum = 0
    // for (let el of arr) {
    //     if (el !== 'special' || el !== 'regular') {
    //         if (+el < 0) {
    //             console.log('Invalid order!');
    //         } else {
    //             sum += +el
    //         }
    //     } else {
    //         break;
    //     }
    // }
    // let taxes = sum * 0.20
    // let finalPrice = el + taxes
    // if ('special') {
    //     finalPrice = finalPrice - (finalPrice * 0.10)
    // }  
    let index = 0
    let command = arr[index]
    index++
    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        if (+command < 0) {
            console.log('Invalid price!');
        } else {
            sum += +command
        }
        command = arr[index]
        index++

    }
    if (sum === 0) {
        return console.log("Invalid order!")
    }


    let taxes = sum * 0.20
    let finalPrice = sum + taxes
    if (command === 'special') {
        finalPrice = finalPrice - (finalPrice * 0.10)
    }

    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${sum.toFixed(2)}$`)
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log('-----------')
    console.log(`Total price: ${finalPrice.toFixed(2)}$`)


}
computerStore(([
    'regular'
    ]))