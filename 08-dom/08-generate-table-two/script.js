/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {

    const table = document.createElement('table');

    for (let i = 0; i <= 10; i++){
      const row = document.createElement('tr');
      for (let j = 0; j <= 10; j++){
        const col = document.createElement('td');
        let val = i * j;
        if (val === 0) {
          val = i || j;
          val = val ? val : '';
          col.classList.add('header');
        }
        col.innerHTML = val;
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    
    target.appendChild(table);
        

})();
