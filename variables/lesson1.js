/*
GLOBAL VARIABLES- THE VARIABLE CAN BE USED THROUGHT THE ENITRE SOCUMENT/SCRIPT
LOCAL VARIBALE- THE VARIABLE CAN ONLY BE USED IN THE SECTION IT WAS DEFINED
*/
/*$(document).ready(function(){
    getInfo();
    showInfo("hi");
})*/
$(document).ready(function(){
    $("#button").click(function(){
            showInfo();
    })
});

var userName;

function getInfo(){
   userName= $("#userName").val();
}
function getInfo(){
userName= $("#userName").val();
}
 
function showInfo(){
    getInfo();
    var message= "Hello " + userName +", glad to meet you!";
    
  $("#output").text(message).fadeIn("slow").animate({"top":"0px"},"slow");
  $("#output").text(message).show().animate({"top":"0px", "opacity":"1"},"slow");
}
