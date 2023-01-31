function shoots(arr) {
    let sequence = arr.shift().split(' ').map(Number)
    let index = 0;
    let command = arr[index];
    index++
    let counter = 0
    while (command !== 'End') {
        command = Number(command)
        if(command < sequence.length) {
            let currentTarget = sequence[command]
            sequence[command] = -1
            for(let i = 0; i < sequence.length; i++) {
                if(sequence[i] > currentTarget){
                    sequence[i] -= currentTarget
                } else {
                    if(sequence[i] !== -1) {
                        sequence[i] += currentTarget
                    }
                }
            }
            counter++
        }

        command = arr[index];
        index++
    }
    if(command === 'End') {
        console.log(`Shot targets: ${counter} -> ${sequence.join(' ')}`);
    }


}
shoots(["30 30 12 60 54 66", 

"5", 

"2", 

"4", 

"0", 

"End"]) 