const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function typerwriter(speed){
    document.getElementById("typewriter").style.opacity=1;
    var element=document.getElementById("typewriter").innerHTML
    document.getElementById("typewriter").innerHTML=""
    for(let i=0;i<element.length;i++){
        document.getElementById("typewriter").innerHTML=element.substring(0,i+1)+'<cursor aria-hidden="true"></cursor>'
        var randSpeed=speed+(Math.random()-0.5)*speed
        // console.log(randSpeed)
        await sleep(randSpeed);
        
    }

}

function transitionToWinPage(){
    document.getElementById("typewriter").style.animation="fadeoutAniamtion 0.3s forwards";
    document.getElementById("Try to win").classList.remove("cardHover");
    document.getElementById("Try to win").style.width="45.57vw";
    document.getElementById("Try to win").style.height="94.2vh";
    document.getElementById("Try to win").style.top="2%";
    document.getElementById("Try to win").style.left="27.5%";
    document.getElementById("Try to win").style.position="fixed";
    document.getElementById("middleCircle").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("leftTopcircle").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("crossFirst").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("crossSecond").style.animation="fadeoutAniamtion 0.25s forwards";
    document.getElementById("TryToWinFont").style.fontSize="6vh";
    document.getElementById("TryToWinFont").style.marginTop="3vh";

    document.getElementById("TicTacToe").style.width="39.06vw";
    document.getElementById("TicTacToe").style.height="39.06vw";
    setTimeout(function(){
        window.location.href="/TryToWin.html"
    },500)
}