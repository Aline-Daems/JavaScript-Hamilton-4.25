/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let one = parseInt(document.getElementById("op-one").value);
    let two = parseInt(document.getElementById("op-two").value);

    const performOperation = operation => {
          

        switch (operation){

            case 'addition': 
            document.getElementById("addition").addEventListener("click", function() {

                let result = one + two;});
        
                alert(result);


                break;
            
            case 'substraction': 
               
           
                alert( one - two);
           
                break;
             
            
            case 'multiplication':

                
                    
                    alert(one * two );
                    break;
            
            case 'division' : 
                
                alert(one / two );
                break;


                default:
                    alert("Something went horribly wrong...");

            
        }
    }




})();
