/** this lesson will demostrate  how math variables should work */

$(document).ready(function(){

    $("#add").click(function(){
        add();
    });
    $("#divide").click(function(){
    
        divide();
              
    })
    $("#Modulus").click(function(){
    
        Modulus();
              
    })

    $("#time").click(function(){
    
        time();
              
    })
     $("sumDigits").click(function(){
    
        sumDigits();
      $("#pow").click(function(){
    
        pow();
      $("squrt").click(function(){
    
        sqrt();
});

/** 
 function wrong(){

    var X= prompt(" enter a number: ")
    var y= prompt(" enter another number: ")
    var sum= x+y;
    var message = x+" +"+ y +" = "+ sum
    alert(message);
    $("#output").text( message+" all information form the user is considered String datatype. The "+"").show()
 }
*/
 var add = function (){
     var x = $("#number1").val();
     var y = $("#number2").val();
     x = parseInt(x);
     y = parseInt(y);
 var sum = x + y;
 var message= x + " + "+ y + " = "+ sum;
 $("#output").text(message +"     all information......")
}
var divide = function(){

    var x =$("#number1").val();
     var y=$("#number2").val();
     /**
      *x= parseInt(x);
      y= parseInt(y);
      */
     var quotient= x/y
     $("#output").text(quotient);

}
var modulus= function(){
    var x =$("#number1").val();
     var y=$("#number2").val();
     var modulus= x % y
     $("#output").text(modulus);

}
var time = function (){
    //Math.round() rounds noramlly
    //math.floor() roundes to the lowest interger
    //Math.ceil() round to the highest interger

   var secondsRemaining;
   var minutesRemaining;
   var hoursRemaining;
   var days;
   var hours
   var minutes
   
   var input= $("#number2").val();
   secondsRemaining = input%60
   minutes= Math.floor(input/60);
  minutesRemaining=minutes%60;
  hours= Math.floor(input/60);
  hoursRemaining=hour%60;
  day= Math.floor(input/24);

  $("#output").text(input +  " seconds is equal to " + days + "days," +  hoursRemaining+ "hours,"+ minutesRemaining + " minutes,"  + " second,"); 



}
