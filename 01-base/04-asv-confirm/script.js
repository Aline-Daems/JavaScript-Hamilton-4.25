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

    let Age = prompt("How old are you ?");
    let Gender = prompt("Are you a boy or a girl ?");
    let Town  = prompt("Where live you ? ");
    
    let Cancel
    let OK=confirm("You are "+Age+" "+" years old " + "You are a "+Gender+" You live in "+ Town);
    if (OK==true) {

        alert("OK GOOD JOB")
    }
    else {
        let Age = prompt("How old are you ?");
    let Gender = prompt("Are you a boy or a girl ?");
    let Town  = prompt("Where live you ? ");
    
    let Cancel
    let OK=confirm("You are "+Age+" "+" years old " + "You are a "+Gender+" You live in "+ Town);
    }

    

    // your code here

})();
