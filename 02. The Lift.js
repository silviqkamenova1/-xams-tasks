function theLift(arr) {
    let people = Number(arr[0])
    let wagons = arr[1].split(' ').map(Number)
    let maxCount = 4
    let difference = 0
    for (let i = 0; i < wagons.length; i++) {
        let count = wagons[i]
        if (count < maxCount) {
            difference = maxCount - count
            if (people >= difference) {
                people -= difference
                wagons[i] += difference
            } else {
                wagons[i] += people;
                people -= difference
                break;
            }
        }
    }
    let emptyWag = wagons.filter(el => el === 0)
    if (people < 0 && emptyWag) {
        console.log('The lift has empty spots!')
        console.log(wagons.join(' '));
    } else if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    }
    let res = wagons.filter(el => el > 0)
    if(res && people === 0) {
        console.log(wagons.join(' '));
    }
}
theLift([
    "16",
    "0 0 0 0"
])
// theLift([
//     "20",
//     "0 2 0"
//    ])