/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let  now = new Date ();
    let  hours = now.getHours();
    const ft = now.toLocaleString ("en-US", {
            hour: "numeric",
            minute: "numeric",
            hours12: true
         });

    if (5 <= hours && hours < 18){
    document.getElementById("target").innerHTML = "Gooooooood Morniiiiing Vietman !!!!"};
    if ( 18 <= hours ) {
    document.getElementById("target").innerHTML = "It's time to sleep. Good night"};


})();
