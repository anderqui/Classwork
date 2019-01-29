$(document).ready(function(){
    $("#button").click(function(){
        showInfo();
    })
});
var nounUno;
var nounDos;
var nounTres;
var nounQuatro;
var nounCinco;
var verbAlpha;
var verbBeta;
var adverbAlpha;
var adjectiveAlpha;
var adjectiveBeta;

function getInfo(){
    nounUno=$("#nounUno").val();
    nounDos=$("#nounDos").val();
    nounTres=$("#nounTres").val();
    nounQuatro=$("#nounQuatro").val();
    nounCinco=$("#nounCinco").val();
    verbAlpha=$("#verbAlpha").val();
    verbBeta=$("#verbBeta").val();
    adverbAlpha=$("#adverbAlpha").val();
    adjectiveAlpha=$("#adjectiveAlpha").val();
    adjectiveBeta=("#adjectiveBeta").val();
    

}
 function showInfo(){
getInfo();
var message =" Today ashley went"+ nounUno +"and wanted to take" +nounDos + "out on a ride around town. But  ealier  that week they were going to the hogwarts school but" + nounTres + "was" +verbAlpha+ "which made ashley and"+ nounUno+ adjectiveAlpha+"which in  then made jeff the town squire very sick and"+ adjectiveBeta + "causing confusion which made" + nounQuatro + " want to help but by then " + nounDos + " wanted to go home and glared at jeff"+ adverbAlpha




 }