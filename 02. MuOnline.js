function muOnline(string) {
    let room = string.split('|')
    let health = 100;
    let bitcoin = 0;
    let roomCounter = 0;
    for (let i = 0; i < room.length; i++) {
        let info = room[i].split(' ')
        let command = info[0];
        let count = Number(info[1]);
        if (command === 'potion') {
            if (health + count > 100) {
                count = 100 - health
                health = 100
            } else {
                health += count
            }
            console.log(`You healed for ${count} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoin += count
            console.log(`You found ${count} bitcoins.`);
            roomCounter++
        } else {
            health -= count;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }

    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
}
//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")