/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
pass1 = document.getElementById("pass-one").value;
 pass2 = document.getElementById("pass-two").value;


    document.getElementById("run").addEventListener("click",function () {
    

   if ( pass1 != pass2) {

    document.getElementsByTagName('input')[0].style.border = "1px solid red";
    document.getElementsByTagName('input')[1].style.border = "1px solid red";

   
   }
});
})();