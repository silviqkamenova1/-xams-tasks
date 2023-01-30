function reception(arr) {
    let students = arr.pop();
    let speedPerHour = +arr[0] + +arr[1] + +arr[2];
    let time = 0
    while (students > 0) {
        students -= speedPerHour
        time++
        if (time % 4 === 0) {
            time++;
        }
    }
    console.log(`Time needed: ${Math.ceil(time)}h.`);
}
reception(['3', '2', '5', '40'])