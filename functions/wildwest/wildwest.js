var hasBow = false;
var hasPhaser = false;


$(document).ready(function(){
    var button1 = createButton("option3" ,O3);
    var button2 = createButton("option3" ,O4);
    var button3 = createButton("option3" ,O5);
    var button4 = createButton("option3" ,O6);
    var button5 = createButton("option3" ,O7);
    var button6 = createButton("option3" ,O81);
    var button7 = createButton("option3" ,O82);
    
    updateNarrtive("Hello")
    $("footer").html(createButton("option1", O1) + createButton("option2", O2));

    $("button").click(function(){
        updateNarrtive(N2);
        $("footer").html(createButton("option3", O4) +  createButton("option4", O5) + createButton ("option5", O5));
        hasBow=true;

    })
    $("#option2").click(function(){
        unpdateNarrtive(N3)
        $("footer").html(createButton("option6",O6) +  createButton("option7", O7));
        hasPhaser= true;


    })

    var rolebutton;
    if(hasBow){
        rolebutton= createButton("option8",O81)
    }
    else
    rolebutton =createButton("option8",O82)

    $("#option3").click(function(){
        updateNarrative(N5)
        $("footer").html(rolebutton);
    })
    $("#option6").click(function(){
        updateNarrative(N6)
        $("footer").html(rolebutton);
    })
});


var N1 =" Once upon a time in the Wild Wild West there lived a..."
var N2 =" This ranger was the most dangerous gunslinger known to man. He loved to..."
var N3 = " This robot had killer instincts. Purge the Wild west of all evil doers. armed with a phaser he..."
var N5= "the ranger approaches the insidious Mr.Pig. He raises his bow and..."
var N6 = "The robot approaches the insidious Mr.Pig. he rasise his phaser and..."
var O1 =" ranger"
var O2 =" robot"
var O3 =" chase tumbleweeds"
var O4 ="cook pancakes"
var O5 =" arrest bad robots"
var O6 =" heats his pork and beans"
var O7 = "purges the wild west of all evil-doers"
var O81 ="shoot the arrow through the pig"
var O82 =" fires, vapories Mr.pg"

var updateNarrtive = function (a) {
    
    $("article").text(a);
}
var createButton = function (id, text) {
return "<button type= button id=" + id + ">" + text + "</button>"
    
}
