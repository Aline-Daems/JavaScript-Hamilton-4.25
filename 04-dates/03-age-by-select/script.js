/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
 
 
    let  now = new Date ();
    let  years1 = now.getFullYear();
    let month1 = now.getMonth();
    let day1 = now.getDay();

     years = document.getElementById("dob-year").value
     month = document.getElementById("dob-month").value
     day = document.getElementById("dob-day").value
     document.getElementById("run").addEventListener("click",function() {
      
    let result = years1 -years;

        if (month <= month1) {

             alert(result);

        }

        else {

            alert(result - 1);
        }

        if ( day <= day1)

        alert(result);

        else {

            (result -1)
        }

       

        
        });
   
     
        
})();
