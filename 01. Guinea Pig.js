function pig(arr) {
    arr = arr.map(Number)
    let quantityFood = arr[0] * 1000
    let hay = arr[1] * 1000
    let cover = arr[2] * 1000
    let pigWeight = arr[3] * 1000

    //let foodPerDay = 300 / 1000
    for (let i = 1; i <= 30; i++) {
        quantityFood -= 300
        if (i % 2 === 0) {
            hay -= quantityFood * 0.05;
        }
        if (i % 3 === 0) {
            cover -= pigWeight / 3
        }
        if (hay <= 0 || cover <= 0 || quantityFood <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
pig(["1",

    "1.5",

    "3",

    "1.5"

])