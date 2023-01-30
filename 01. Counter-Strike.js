function counterStrike(arr) {
    let energy = +arr.shift();
    //arr = arr.map(Number)
    let index = 0
    let command = arr[index]
    index++
    let countBattles = 0;

    while (command !== 'End of battle') {
        command = Number(command)
        if (energy === 0 || energy < command) {
            console.log(`Not enough energy! Game ends with ${countBattles} won battles and ${energy} energy`);
            break;
        } else {
            energy -= command
            countBattles++
        }
        if(countBattles % 3 === 0) {
            energy += countBattles
        }
        command = arr[index]
        index++
    }
    if (command === 'End of battle') {
        console.log(`Won battles: ${countBattles}. Energy left: ${energy}`);


    }

}
counterStrike((["100", 

"10", 

"10", 

"10", 

"1", 

"2", 

"3", 

"73", 

"10"]) )