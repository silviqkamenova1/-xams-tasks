function bonusSystem(arr) {
    arr = arr.map(Number)
    let studentsCount = arr.shift()
    let lectureCount = arr.shift()
    let bonus = arr.shift()

    let totalBonus = 0;
    let maxBonus = 0
    let student = 0
    for (let i = 0; i < arr.length; i++) {
        let attendances = arr[i];
        totalBonus = attendances / lectureCount * (5 + bonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus
            student = attendances
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${student} lectures.`);
}
bonusSystem([ 

    '10', '30', '14', '8', 
  
    '23', '27', '28', '15', 
  
    '17', '25', '26', '5', 
  
    '18' 
  
  ] )