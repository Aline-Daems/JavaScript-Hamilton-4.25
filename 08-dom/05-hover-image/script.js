/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var image = document.querySelector("img");



image.addEventListener('mouseover', function(){


     let newimage = image.getAttribute("data-hover");
     image.setAttribute("src", newimage);
});




})();
