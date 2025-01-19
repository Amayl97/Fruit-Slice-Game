var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'blueberry', 'lemon', 'orange', 'pineapple', 'mango'];
var step;
var action;

$(function(){
 $("#startReset").click(function(){
    if(playing == true)
    {
        location.reload();
    }
    else
    {
       playing = true;
       score = 0;
       $("#scoreVal").html(score);
       $("#trialsLeft").show();
       trialsLeft = 3;
       addHearts();
       $("#gameOver").hide();
       $("#startReset").html("Reset Game");
       startAct();

    }
 });

 $("#fruit1").mouseover(function(){
 score++;
 $("#scoreValue").html(score);
 $("#sound")[0].play();
 clearInterval(action);
 $("#fruit1").hide("explode", 300);
 setTimeout(startAct, 500);
 });

//Functions
function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
    $("#trialsLeft").append('<img src="pics/heart.png" class="life">');
    }
}

function startAct(){

    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50 });
    step = 1 + Math.round(5*Math.random());
    action = setInterval(function(){
    $("#fruit1").css('top', $("#fruit1").position().top + step);
     if($("#fruit1").position().top > $("#fruitCont").height())
     {
        if(trialsLeft > 1)
        {
            $("#fruit1").show();
             chooseFruit();
             $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50 });
             step = 1 + Math.round(5*Math.random());
            trialsLeft--;
            addHearts();
        }
        else
        {
            playing = false;
            $("#startReset").html("Start Game");
            $("#gameOver").show();
            $("#gameOver").html('<p>Game Over!</p><p>Your Score is ' + score + '</p>');
            $("#trialsLeft").hide();
            stopAct();
        }
     }
    }, 10)
}

function chooseFruit(){
    $("#fruit1").attr('src', 'pics/' + fruits[Math.round(5*Math.random())] +'.png');
}

function stopAct(){
    clearInterval(action);
    $("#fruit1").hide();

}

});
