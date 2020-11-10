/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    let age 
    let town
    let gender
  do{ 
    age = prompt ('How old are you ? ')
    gender = prompt (' Are you a boy or a girl ?')
    town = prompt (' Where live you ? ')
  
  } while ( age == "" || age == null  && gender == "" || gender == null && town == "" || town == null)

  alert("You are " + age + " years old." + " You are a " + gender + " You lives in " + town);

})();
