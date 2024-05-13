const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function typerwriter(speed){
    document.getElementById("rules").style.opacity=1;
    var element=document.getElementById("rules").innerHTML
    document.getElementById("rules").innerHTML=""
    for(let i=0;i<element.length;i++){
        document.getElementById("rules").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
    document.getElementById("rules").innerHTML=element.substring(0,element.length+1)
    document.getElementById("rulesText").style.opacity=1;
    var element=document.getElementById("rulesText").innerHTML
    document.getElementById("rulesText").innerHTML=""
    for(let i=0;i<element.length;i++){
        document.getElementById("rulesText").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
}

function startAnimation(){
    document.getElementById("TryToWinFont").style.animation="fadeoutAniamtion 1s forwards";
    

    setTimeout(function(){
        // document.getElementById("TryToWinFont").remove()
        document.getElementById("Startgame").style.display="block";
        document.getElementById("LetComputerStart").style.display="block";
    },1000)
    // document.getElementById("LetComputerStart").style.transition="0.4s";

    setTimeout(function(){
        typerwriter(50)
    },1000)
}

function playerStart(){
    document.getElementById("Startgame").style.animation="fadeoutAniamtion 1s forwards";
    document.getElementById("LetComputerStart").style.animation="fadeoutAniamtion 1s forwards";
    setTimeout(function(){
        document.getElementById("Startgame").remove()
        document.getElementById("LetComputerStart").remove()        
        document.getElementById("TryToWinFont").innerHTML="YOUR TURN"
        document.getElementById("TryToWinFont").style.animation="fadeinAniamtion 1s forwards";
        document.getElementById("Try to win").style.cursor="pointer";
    },1000)
    document.body.addEventListener('click', clicked, true); 

}

function clicked(event){
    console.log(event)
}
