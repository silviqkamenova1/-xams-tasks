function imitationGame(arr) {
    let string = arr.shift().split('')
    let index = 0;
    let command = arr[index];
    index++

    while (command !== 'Decode') {
        let info = command.split('|')
        if (info.includes('Move')) {
            let index = +info[1]
            let letters = string.splice(0, index)
            string.push(...letters)
        } else if (info.includes('Insert')) {
            let index = +info[1]
            let value = info[2]
            string.splice(index, 0, value)
        } else if (info.includes('ChangeAll')) {
            let substring = info[1];
            let replacement = info[2]
            let toString = string.join('')
            // for (let i = 0; i < toString.length; i++) {
            //     if (toString[i] === substring) {
            //         toString = toString.replace(substring, replacement)
            //     }
            // }
            let replaceAllWord = toString
            while(replaceAllWord.indexOf(substring) >= 0) {
                replaceAllWord = replaceAllWord.replace(substring, replacement)
            }
            string = replaceAllWord.split('')
        }
        command = arr[index];
        index++
    }
    if (command === 'Decode') {
        console.log(`The decrypted message is: ${string.join('')}`);
    }


}
// imitationGame([ 

//     'owyouh', 

//     'Move|2', 

//     'Move|3', 

//     'Insert|3|are', 

//     'Insert|9|?', 

//     'Decode', 

//   ] )
imitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode',

])