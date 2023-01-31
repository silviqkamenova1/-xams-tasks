function arrModifier(arr) {
    let array = arr.shift().split(' ').map(Number)
    for (let el of arr) {
        let index = el.split(' ')
        let command = index.shift()
        if (command !== 'end') {
            if (command === 'swap') {
                let index1 = array[index[0]]
                array[index[0]] = array[index[1]]
                array[index[1]] = index1
            } else if (command === 'multiply') {
                let sum = array[index[0]] * array[index[1]]
                array.splice(index[0], 1, sum)
            } else if (command === 'decrease') {
                for (let i = 0; i < array.length; i++) {
                    array[i] -= 1
                }

            }

        }
    }
    console.log(array.join(', '));

}
arrModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])