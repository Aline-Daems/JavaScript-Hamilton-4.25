/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    pass1 = document.getElementById("pass-one").value;
    pass2 = document.getElementById("pass-two").value;

    let cl = document.querySelector("div.field");

    let cl2 = cl.querySelectorAll("div.field")


    document.getElementById("run").addEventListener("click",function () {
        

   if (pass1 != pass2) {

    cl.classList.remove("field");
    cl.classList.add("error");

   }

});

})();
