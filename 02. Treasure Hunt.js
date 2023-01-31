function treasure(arr) {

    let loot = arr.shift().split('|');
    let index = 0;
    let info = arr[index];
    index++

    let stolenThings;
    while (!info.includes('Yohoho!')) {
        info = info.split(' ');
        let command = info.shift();
        if (command === 'Loot') {
            //loot.unshift(...info)
            for (let el of info) {
                if (!loot.includes(el)) {
                    loot.unshift(el);
                }
            }
        } else if (command === 'Drop') {
            if (+info[0] > 0 && +info[0] < loot.length) {
                let droppedEl = loot.splice(+info[0], 1);
                loot.push(droppedEl);
            }
        } else if (command === 'Steal') {
            if (+info[0] > loot.length) {
                info[0] = loot.length * -1;
                //stolenThings = loot.pop(info[0]);
                stolenThings = loot.splice(info[0])
                console.log(stolenThings.join(', '));
            } else {
                stolenThings = loot.splice(+info[0] * -1);
                console.log(stolenThings.join(', '));
            }
        }
        info = arr[index]
        index++
    }
    if (loot.length > 0) {
        let sum = 0;
        for (let el of loot) {
            sum += el.length
        }
        let avgGain = sum / loot.length
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }

}
treasure(["Diamonds|Silver|Shotgun|Gold", 

"Loot Silver Medals Coal", 

"Drop -1", 

"Drop 1", 

"Steal 6", 

"Yohoho!"]) 