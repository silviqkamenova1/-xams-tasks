function shoppingList(arr) {
    let list = arr.shift().split('!')
    let index = 0;
    let info = arr[index];
    index++

    while (info !== "Go Shopping!") {
        info = info.split(' ')
        let command = info.shift()
        if (command === 'Urgent') {
            if (!list.includes(info[0])) {
                list.unshift(info[0])
            }
        } else if (command === 'Unnecessary') {
            if (list.includes(info[0])) {
                let index = list.indexOf(info[0]);
                list.splice(index, 1)
            }
        } else if (command === 'Correct') {
            if (list.includes(info[0])) {
                let index = list.indexOf(info[0]);
                list.splice(index, 1, info[1])
            }
        } else if (command === 'Rearrange') {
            if (list.includes(info[0])) {
                let index = list.indexOf(info[0]);
                list.splice(index, 1)
                list.push(info[0])
            }
        }
        info = arr[index];
        index++
    }
    console.log(list.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana", 

"Urgent Salt", 

"Unnecessary Grapes", 

"Correct Pepper Onion", 

"Rearrange Grapes", 

"Correct Tomatoes Potatoes", 

"Go Shopping!"])  