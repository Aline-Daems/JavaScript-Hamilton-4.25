/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

 let i = 0 

 let txt =  "Je suis un texte qui va apparaître dans un effet \"machine à écrire\", un peu comme dans\ les films noirs. Sauf que... je ne sais pas qui est l\'assassin ! Y en a-t-il vraiment un \? Habite-t-il au 21 \? Que de mystères !"
 let speed = 50;


 function typeWriter() {

    if (i < txt.length){

     
        
        document.getElementById("target").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

        
    }
 } 

 document.getElementById("target").innerHTML=" "

typeWriter()

 


})();
