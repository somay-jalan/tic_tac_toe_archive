const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function typerwriter(speed){
    document.getElementById("typewriter").style.opacity=1;
    var element=document.getElementById("typewriter").innerHTML
    document.getElementById("typewriter").innerHTML=""
    console.log(element);
    for(let i=0;i<element.length;i++){
        document.getElementById("typewriter").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }
}

function transitionToWinPage(href){
    document.getElementById("typewriter").style.animation="fadeoutAniamtion 0.3s forwards";
    document.getElementById("Try to win").classList.remove("cardHover");
    document.getElementById("TryToWinFont").innerHTML="";
    document.getElementById("Try to win").style.width="700px";
    document.getElementById("Try to win").style.height="825px";
    document.getElementById("Try to win").style.top="2%";
    document.getElementById("Try to win").style.left="27.5%";
    
    document.getElementById("middleCircle").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("leftTopcircle").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("crossFirst").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("crossSecond").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("TryToWinFont").innerHTML="TRY TO WIN";
    document.getElementById("TryToWinFont").style.fontSize="75px";
    document.getElementById("TicTacToe").style.width="600px";
    document.getElementById("TicTacToe").style.height="600px";
    setTimeout(function(){
        window.location.href="/TryToWin.html"
    },450)
}