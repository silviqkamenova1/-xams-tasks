function blackFlag(arr) {
    let days = Number(arr.shift());
    let dailyPLunder = Number(arr.shift());
    let expected = Number(arr.shift());

    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += dailyPLunder
        if (i % 3 === 0) {
            total += dailyPLunder - (dailyPLunder * 0.5)
        }
        if (i % 5 === 0) {
            total = total * 0.7
        }

    }
    if (total >= expected) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {

        let percentage = total / expected * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["10",

    "20",

    "380"]))