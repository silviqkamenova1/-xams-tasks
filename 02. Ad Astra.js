function adAstra(arr) {
let string = arr.toString().trimStart()
let replaced = string.replaceAll('#', '|')//.split('|')
// for(let el of string){
//     // if(el !== ''){
//         console.log(el);
//     // }

// }

console.log(replaced);

}
adAstra([ 

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|' 
    
    ] )