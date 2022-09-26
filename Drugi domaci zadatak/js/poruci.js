var rezultat = 0;
var dugme = document.getElementById("izracunaj").addEventListener("click",function(){
    var x = parseInt(document.getElementById("padobranci").value) * 1600;
    var y = parseInt(document.getElementById("kesten").value) * 1600;
    var plazma = parseInt(document.getElementById("plazma").value) * 1600;
    var vanila = parseInt(document.getElementById("vanilice").value) * 1600;
    var sumsko = parseInt(document.getElementById("sumsko").value) * 100;
    var malina = parseInt(document.getElementById("malina").value) * 100;
    var banana = parseInt(document.getElementById("banana").value) * 100;
    var cokolada = parseInt(document.getElementById("cokolada").value) * 100;
    var jagoda = parseInt(document.getElementById("jagoda").value) * 100;
    var svarcvald = parseInt(document.getElementById("svarcvald").value) * 500;
    var saher = parseInt(document.getElementById("saher").value) * 500;
    var seherezada = parseInt(document.getElementById("seherezada").value) * 450;
    var reforma = parseInt(document.getElementById("reforma").value) * 450;
    var cizkejk = parseInt(document.getElementById("cizkejk").value) * 350;
    rezultat = x + y + plazma + vanila + sumsko + malina + banana + cokolada + jagoda + svarcvald
    + saher + seherezada + reforma + cizkejk;
    document.getElementById("cena").value = rezultat;
    return rezultat;
}); 

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0!
// var yyyy = today.getFullYear();

// if (dd < 10) {
//    dd = '0' + dd;
// }

// if (mm < 10) {
//    mm = '0' + mm;
// } 
    
// today = yyyy + '-' + mm + '-' + dd;
// document.getElementById("datefield").setAttribute("min", today);

var potvrda = document.getElementById("potvrdi").addEventListener("click",function(){
    if(document.getElementById("cena").value == 0){
        alert("Molimo izaberite neku poslasticu i izracunajte")
        return;
    }

    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var ulica = document.getElementById("ulica").value + " " + document.getElementById("brojUlice").value;
    var telefon = document.getElementById("telefon").value;
    var email = document.getElementById("email").value;
    var datum = new Date(document.getElementById("datum").value);
    var cena = document.getElementById("cena").value; 

    if(ime.trim() == "" || prezime.trim() == "" || ulica.trim() == ""  ||
    datum.toString() === "Invalid Date"){
        alert("Molimo unesite podatke u obavezna polja")
        return;
    }
    
    var today = new Date();
    /*var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();*/

    // datum.toLocaleDateString("en-US")
    // alert(datum.getFullYear())
    // alert(datum.getMonth() + 1)
    // alert(datum.getDate())
    // alert(today)
    if(today.getFullYear() > datum.getFullYear() || 
    (today.getDate() > datum.getDate() && datum.getMonth() == today.getMonth()) ||
    (today.getDate() == datum.getDate() && datum.getMonth() == today.getMonth())
    || datum.getFullYear() > today.getFullYear() + 1)
    { 
       alert("Unesite ponovo datum")
       return
    }

    var poruka = "Da li ste sigurni da zelite da porucite?\n" +
    "Ime: " + ime + "\nPrezime: " + prezime + "\nUlica i broj: " + ulica + 
    "\nTelefon: " + telefon + "\nEmail: " + email + "\n" + "Datum: " + datum +
    "\n\nUkupan iznos: " + cena;

    if(confirm(poruka)){
        document.getElementById("forma").reset();
    }
    else
        return false;
})