/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    

       
function randomNbrs(min, max) {

    
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min+1)) + min; 
        
    }
    document.getElementById("run").addEventListener("click", function (){
 
 
    result =  randomNbrs;

    let table = [];

    for ( i = 0 ; i <= 9 ; i++){
 

  
    table.push(randomNbrs(0,100));
    

     }
     let n0 = table[0]
     let n1 = table[1]
     let n2 = table[2]
     let n3 = table[3]
     let n4 = table[4]
     let n5 = table[5]
     let n6 = table[6]
     let n7 = table[7]
     let n8 = table[8]
     let n9 = table[9]

     document.getElementById("n-1").innerHTML = n0
     document.getElementById("n-2").innerHTML = n1
     document.getElementById("n-3").innerHTML = n2
     document.getElementById("n-4").innerHTML = n3
     document.getElementById("n-5").innerHTML = n4
     document.getElementById("n-6").innerHTML = n5
     document.getElementById("n-7").innerHTML = n6
     document.getElementById("n-8").innerHTML = n7
     document.getElementById("n-9").innerHTML = n8
     document.getElementById("n-10").innerHTML = n9

     let min = Math.min(...table);
     let max = Math.max(...table);
     
     document.getElementById("min").innerHTML = min;
     document.getElementById("max").innerHTML = max;

     const reducer = (accumulator, currentValue) => accumulator + currentValue; 
     document.getElementById("sum").innerHTML = table.reduce(reducer);

     const reducer2 = (accumulator, currentValue) => (accumulator + currentValue); 
     document.getElementById("average").innerHTML = table.reduce(reducer2)/table.length;
     console.log(table);
    });
})();
