$(document).ready(function() {
    $(".gimg1").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })
    $(".gimg2").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })
    $(".gimg3").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})

$("#potvrdi").on("click",function(){
    var ime = $(".ime").value;
    var prezime = $(".prezime").value;
    var email = $(".email").value;
    var komentar = $(".textareaforma").val();
    var ocena = $(".ocena").value;

    if(komentar == ""){
        alert("Molimo unesite podatke u polje za komentar");
        return;
    }
    alert("Hvala na Vašem doprinosu :)")
});