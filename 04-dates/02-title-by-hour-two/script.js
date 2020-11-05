/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let  now = new Date ();
    let  hours = now.getHours();
    let min = now.getMinutes();
    const ft = now.toLocaleString ("en-US", {
            hour: "numeric",
            minute: "numeric",
            hours12: true
         });

    if (5 <= hours && hours <= 17  && min <= 30 ){
    document.getElementById("target").innerHTML = "Gooooooood Morniiiiing Vietman !!!!"};
    if ( 17 <= hours && min > 30 ) {
    document.getElementById("target").innerHTML = "It's time to sleep. Good night"};


})();
