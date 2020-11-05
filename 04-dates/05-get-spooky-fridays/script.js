/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function don_date_format(d1) { 

        let m = new Array (13);

        m[1] ="Janvier"; m[2] ="Février"; m[3]="Mars"; m[4] = "avril"; m[5] = "mai"; m[6] = "juin"; m[7]="juillet"; 
        m[8] = "août"; m[9] ="septembre"; m[10] = "octobre"; m[11] = "novembre"; m[12] = "décembre";

        let d = new Array (8);
        d[1]="lundi"; d[2]="mardi"; d[3]="mercredi"; d[4]="jeudi"; d[5]="vendredi"; d[6]="samedi"; d[7]="dimanche";
        let mois =m[d1.getMont()+1];
        let jour =d[d1.getDay()+1];
        let date=d1.getDate();
        let an=d1.getYear();

        if (an<200) an+=1900;
        date=jour+" "+date+" "+mois+" "+an;
        return date;
  
    }
    

    function prochain() {

        let dt_jour = new Date; 
        let an = dt_jour.getYear(); 
        if (an<200) an+=1900;
        let m=dt_jour.getMont(); 
        let d=dt_jour.getDate();
        if (d>13) m++;
        let ven="";
        while (ven =="") {
            dt_jour.setDate(13);
            dt_jour.setMonth(m);
            dt_jour.setFullYear(an);
            if (dt_jour.getDay()==5) {
                ven=dont_date_format(dt_jour);

            }
            m++;

            if (m==13) {m=0; an++}

        }

        return ven;

        function getVendredi() {

            let an = document.getElementById("year").value;
            let dt_jour=new Date; 
            document.getElementById("run").addEventListener("click", function() {
            for (let i = 0; i <12; i++) {

                dt_jour.setMonth(i);
                dt_jour.setDate(13);
                dt_jour.setYear(an);
                if (dt_jour.getDay()==5) {
                   alert("LOL");

            };
            };
            });
       
        };
    };

})();
